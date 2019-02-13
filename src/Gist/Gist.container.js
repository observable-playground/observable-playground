import React, { Component } from 'react'
import { GistComponent } from './Gist.component';
import axios from 'axios';

export class GistContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            data: undefined
        };
    }

    componentWillMount(){
        const { gistId } = this.props;
        axios
            .get(`https://api.github.com/gists/${gistId}`)
            .then(response => {
                this.setState({
                    loading: false,
                    data: response.data
                });
            });
    }

    render(){
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        return <GistComponent data={ this.state.data }/>
    }
}