import * as Modals from '../constants/Modals';

import * as libraryAction from '../actions/library';
import * as modalsAction from '../actions/modals';

import images from '../images';

class MenuManager {
	constructor(store) {
		this.store = store;
	}

	build(...templates) {
		templates.forEach(template => this.replaceSubMenus(template));
	}

	buildMenu(items) {
		let menu = new Menu();
		let menuItems = this.buildMenuItems(items);

		menuItems.forEach(menuItem => menu.append(menuItem));

		return menu;
	}

	buildMenuItems(items) {
		return items.map(item => new MenuItem(this.replaceSubMenus(item)));
	}

	replaceSubMenus(template) {
		if (template.submenu) {
			template.submenu = Object.keys(template.submenu).map(key => {
				if (template.submenu[key].submenu)
					return this.replaceSubMenus(template.submenu[key]);
				else if (template.submenu[key].remove)
					return null;
				else
					return template.submenu[key];
			}).filter(e => !!e);
		}

		return template;
	}

	getExportTemplate(forceExportAll = false) {
		let appState = this.store.getState().AppReducer;
		let libraryState = this.store.getState().LibraryReducer;
		// Old logic: checks if selected count == 1
		// let notes = (libraryState.context == "GROUPS" && libraryState.filterGroup) ? ContentManager.getEntityNotes("groups", libraryState.filterGroup) : ContentManager.getSelectedNotes();
		// let exportEnabled = notes.length === 1;

		// New logic: Check if there are any notes in the library to enable the menu
		let hasNotes = Object.keys(ContentManager.notes).length > 0;
		let exportEnabled = hasNotes;

		let template = {
			id: "export",
			label: LocalesManager.dictionary["menu.export"],
			enabled: hasNotes,
			submenu: {
				// txt & docx removed
				separator1: { type: "separator" },
				jpg: {
					id: "jpg",
					label: "   JPG   ",
					enabled: exportEnabled,
					click: () => this.store.dispatch(libraryAction.exportAllNotes("JPG", forceExportAll))
				},
				png: {
					id: "png",
					label: "   PNG   ",
					enabled: exportEnabled,
					click: () => this.store.dispatch(libraryAction.exportAllNotes("PNG", forceExportAll))
				},
				psd: {
					label: "   PSD   ",
					enabled: exportEnabled,
					click: () => this.store.dispatch(libraryAction.exportAllNotes("PSD", forceExportAll))
				},
				separator2: { type: "separator" },
				svg: {
					label: "   SVG   ",
					enabled: exportEnabled,
					click: () => this.store.dispatch(libraryAction.exportAllNotes("SVG", forceExportAll))
				},
				separator3: { type: "separator" },
				// video removed
			}
		};

		// TODO: menu should be disabled in GROUPS context
		if (process.platform == "darwin" && !template.enabled) {
			template = {
				label: LocalesManager.dictionary["menu.export"],
				enabled: false
			};
		}

		return template;
	}

	getGroupsTemplate() {
		let groups = ContentManager.getEntity("groups");
		let submenu = {};

		let orderedValues = groups.orderedValues;
		let cache = {};

		for (let group of orderedValues)
			cache[group.id] = group.notes.filter(noteID => ContentManager.selected.includes(noteID));

		for (let group of orderedValues) {
			let tick = null;

			if (cache[group.id].length == ContentManager.selected.length)
				tick = images.tickBlue;
			else if (cache[group.id].length)
				tick = images.tickGrey;
			else
				tick = images.tickEmpty;

			submenu[group.id] = {
				label: group.name,
				icon: tick,
				click: () => this.store.dispatch(libraryAction.editGroupRelations(group, cache))
			};
		}

		let template = {
			label: LocalesManager.dictionary["menu.groups"],
			enabled: orderedValues.length > 0 && ContentManager.selected.length > 0,
			submenu: submenu
		};

		// TODO: menu should be disabled in GROUPS context
		if (process.platform == "darwin" && !template.enabled) {
			template = {
				label: LocalesManager.dictionary["menu.groups"],
				enabled: false
			};
		}

		return template;
	}
}

export default MenuManager;
