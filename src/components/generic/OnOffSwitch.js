import React, { Component } from 'react';

class OnOffSwitch extends Component {
    render() {
        const { id, checked, onChange, disabled } = this.props;
        return (
            <div className="onoffswitch">
                <input
                    type="checkbox"
                    name="onoffswitch"
                    className="onoffswitch-checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <label className="onoffswitch-label" htmlFor={id}>
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>
        );
    }
}

export default OnOffSwitch;
