import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import { Playground } from './Playground';
import { findExample } from '../examples';

export class PlaygroundRoutingContainer extends Component {
    constructor(props){
        super(props);
        const code = findExample(props.match.params);
        this.state = {
            code
        };
    }

    componentWillReceiveProps(nextProps) {
        const code = findExample(nextProps.match.params);
        this.setState({
            code
        });
    }

    render() {
        if (!this.state.code) {
            return (<Redirect to={{ pathname: '/' }} />);
        }
        return (
            <Playground code={ this.state.code }></Playground>
        );
    }
}