import React, { Component } from 'react';
import './ErrorComponent.css';

export class ErrorComponent extends Component {
    render() {
        const error = this.props.error;
        return (
            <div className="ErrorComponent">
                { error.toString() }
            </div>
        )
    }
}