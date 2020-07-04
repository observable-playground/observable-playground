import React, { Component } from 'react';
import style from './ErrorComponent.module.scss';

export class ErrorComponent extends Component {
    render() {
        const error = this.props.error;
        return (
            <div className={style.ErrorComponent} title="Error">
                ❌ { error.toString() }
            </div>
        )
    }
}