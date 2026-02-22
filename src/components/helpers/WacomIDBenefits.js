import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import SignUpTick from '../icons/SignUpTick.svg';

import images from '../../images';
/*

*/
class WacomIDBenefits extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wacom-id-benefits">
				<img src={images.signUpLogo} alt="" />
				<div className="title"><FormattedMessage id={'plus.title'}/></div>

				<div className="features">
					<table cellSpacing="0" cellPadding="0">
					<tbody>
					<tr>
						<th><SignUpTick /></th>
						<td><FormattedMessage id={'plus.export.all.title'}/></td>
					</tr>
					<tr>
						<th></th>
						<td><FormattedMessage id={'plus.export.all.description'}/></td>
					</tr>
					<tr>
						<th><SignUpTick /></th>
						<td><FormattedMessage id={'plus.usb.bt.title'}/></td>
					</tr>
					<tr>
						<th></th>
						<td><FormattedMessage id={'plus.usb.bt.description'}/></td>
					</tr>
					<tr>
						<th><SignUpTick /></th>
						<td><FormattedMessage id={'plus.darktheme.title'}/></td>
					</tr>
					<tr>
						<th></th>
						<td><FormattedMessage id={'plus.darktheme.description'}/></td>
					</tr>
					<tr>
						<th><SignUpTick /></th>
						<td><FormattedMessage id={'plus.appid.title'}/></td>
					</tr>
					<tr>
						<th></th>
						<td><FormattedMessage id={'plus.appid.description'}/></td>
					</tr>
					</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default WacomIDBenefits;
