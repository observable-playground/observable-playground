import React, { Component } from 'react';
import './WarningComponent.css';

export class WarningComponent extends Component {
    render() {
        const warning = this.props.warning;
        return (
            <div className="WarningComponent" title="Warning">
                ⚠️ { warning.toString() }
            </div>
        )
    }
}