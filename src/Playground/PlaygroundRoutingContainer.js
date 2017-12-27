import React, { Component } from 'react';
import { Playground } from './Playground';
import { rxjs as examples } from '../examples';

export class PlaygroundRoutingContainer extends Component {
    constructor(props){
        super(props);
        const example = this.getExample(props.match);
        this.state = {
            example
        };
    }

    componentWillReceiveProps(nextProps) {
        const example = this.getExample(nextProps.match);
        this.setState({
            example
        });
    }

    getExample(match){
        return examples.find(x=>x.handle === match.params.handle)
               || examples[0];
    }

    render() {
        const code = this.state.example.code;
        return (
            <Playground code={ code }></Playground>
        );
    }
}