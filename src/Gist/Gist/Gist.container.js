import React, { Component } from 'react'
import { GistComponent } from './Gist.component';
import axios from 'axios';

const GIST_URL_PREFIX = 'https://gist.github.com/';

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
            const {gistId} = this.props;
            const gistUrl = GIST_URL_PREFIX + gistId;
            return <div className="PageBlock">Loading Gist from <a href={ gistUrl } target="_blank">{ gistUrl }</a>...</div>
        }

        return <GistComponent data={ this.state.data }/>
    }
}