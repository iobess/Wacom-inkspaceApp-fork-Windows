
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/library';
import * as Modals from '../../constants/Modals';

class ExportAllModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'SVG'
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleExport = this.handleExport.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value });
    }

    handleExport() {
        this.props.exportAllNotes(this.state.format);
        this.props.closeDialog();
    }

    handleCancel() {
        this.props.closeDialog();
    }

    render() {
        if (!this.props.modal || this.props.modal !== Modals.EXPORT_ALL) return null;

        return (
            <div className={"dialog-wrapper flex-wrapper " + this.props.modal} onClick={this.handleCancel}>
                <div className="dialog modal export-all-modal" onClick={event => event.stopPropagation()}>
                    <div className="dialog-content">
                        <h1>
                            <FormattedMessage id="exportAll.title" defaultMessage="Export All Notes" />
                        </h1>
                        <div className="export-all-content">
                            <p><FormattedMessage id="exportAll.description" defaultMessage="Select format to export all notes:" /></p>
                            <div className="format-selection" style={{ margin: '20px 0' }}>
                                <label style={{ marginRight: '15px' }}>
                                    <input
                                        type="radio"
                                        value="SVG"
                                        checked={this.state.format === 'SVG'}
                                        onChange={this.handleFormatChange}
                                    /> <span style={{ marginLeft: '5px' }}>SVG</span>
                                </label>
                                <label style={{ marginRight: '15px' }}>
                                    <input
                                        type="radio"
                                        value="JPG"
                                        checked={this.state.format === 'JPG'}
                                        onChange={this.handleFormatChange}
                                    /> <span style={{ marginLeft: '5px' }}>JPG</span>
                                </label>
                                <label style={{ marginRight: '15px' }}>
                                    <input
                                        type="radio"
                                        value="PNG"
                                        checked={this.state.format === 'PNG'}
                                        onChange={this.handleFormatChange}
                                    /> <span style={{ marginLeft: '5px' }}>PNG</span>
                                </label>
                                <label style={{ marginRight: '15px' }}>
                                    <input
                                        type="radio"
                                        value="PSD"
                                        checked={this.state.format === 'PSD'}
                                        onChange={this.handleFormatChange}
                                    /> <span style={{ marginLeft: '5px' }}>PSD</span>
                                </label>
                            </div>
                        </div>
                        <div className="export-text-buttons">
                            <div className="export-btn-cont">
                                <a className="export-text-success btn" onClick={this.handleExport}>
                                    <FormattedMessage id="btn.export" defaultMessage="Export" />
                                </a>
                                <a className="export-text-cancel" onClick={this.handleCancel}>
                                    <FormattedMessage id="btn.cancel" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modal: state.AppReducer.modal
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportAllModal);
