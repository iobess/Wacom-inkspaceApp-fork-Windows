import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import LanguageMenu from '../../generic/LanguageMenu';


import OnOffSwitch from '../../generic/OnOffSwitch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../../../actions/app';

import * as WizardTypes from '../../../constants/WizardTypes';


class Support extends Component {
	constructor(props) {
		super(props);
	}


	showTutorial(e) {
		e.preventDefault();

		this.props.closeDialog();
		this.props.openWizard(WizardTypes.TUTORIAL);
	}

	toggleTheme = (e) => {
		const newTheme = e.target.checked ? 'dark' : 'light';
		this.props.setTheme(newTheme);
	}


	render() {
		return (
			<div className="support-container">
				<ul>

					<li className="has-select-list">
						<span className="cloud-left"><FormattedMessage id={'settings.support.app.language'} /></span>
						<LanguageMenu name="display-language" classNames="lang-select cloud-right" />
					</li>
					<li>
						<span className="cloud-left">Dark Mode</span>
						<span className="cloud-right" style={{ marginTop: '5px' }}>
							<OnOffSwitch
								id="dark-mode-switch"
								checked={this.props.theme === 'dark'}
								onChange={this.toggleTheme}
							/>
						</span>
					</li>
					<li>
						<span className="cloud-left">Edit Mode & Live Mode Dark Support</span>
						<br />
						<span className="sub-label" style={{ fontSize: '12px', color: '#888' }}>
							Enable Dark Mode support for Edit Mode and Live Mode (White ink on Black background).
						</span>
						<span className="cloud-right" style={{ marginTop: '5px' }}>
							<OnOffSwitch
								id="canvas-dark-mode-switch"
								checked={this.props.canvasDarkMode}
								onChange={(e) => this.props.setCanvasDarkMode(e.target.checked)}
							/>
						</span>
					</li>

					{/*
					<li>
						<span className="cloud-left ink-blue">
							<a onClick={() => UIManager.openExternal("http://www.wacom.com/en-de/products/apps-services/inkspace")}>
								<FormattedMessage id={ 'settings.support.about.inkspace' }/>
							</a>
						</span>
					</li>
					*/}
					{(() => {
						if (this.props.device) {
							return (
								<li>
									<span className="cloud-left ink-blue">
										<a onClick={::this.showTutorial}><FormattedMessage id={'system.menu.tutorial'} /></a>
								</span>
								</li>
				);
						}
					})()}
				<li>
					<span className="cloud-left ink-blue">
						<a onClick={() => UIManager.openExternal("http://www.wacom.com/start/intuos-pro-paper")}>
							<FormattedMessage id={'settings.support.inkspace.help'} />
						</a>
					</span>
				</li>
				{/*
					<li>
						<span className="cloud-left ink-blue">
							<a>
								<FormattedMessage id={ 'settings.support.whats.new' }/>
							</a>
						</span>
					</li>
					*/}
				<li>
					<span className="cloud-left ink-blue">
						<a onClick={() => UIManager.openExternal("http://www.wacom.com/en-de/products/apps-services")}>
							<FormattedMessage id={'settings.support.explore.apps'} />
						</a>
					</span>
				</li>
				{/*
					<li>
						<span className="cloud-left ink-blue">
							<a onClick={()=>UIManager.openExternal("http://www.wacom.com/products/pen-tablets/intuos-pro-overview")}>
								<FormattedMessage id={ 'settings.support.accessories' }/>
							</a>
						</span>
					</li>
					*/}
			</ul>
			</div >
		)
	}
}


function mapStateToProps(state) {
	return {
		theme: state.AppReducer.theme,
		canvasDarkMode: state.AppReducer.canvasDarkMode
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(appActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Support);

