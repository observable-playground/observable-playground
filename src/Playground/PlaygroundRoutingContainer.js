import React, { Component } from 'react';
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
        // TODO: redirect to 404 if no example found
        return (
            <Playground code={ this.state.code }></Playground>
        );
    }
}