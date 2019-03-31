import React, { Component } from 'react'
import axios from 'axios';
import { GIST_URL_PREFIX } from './const';
import { GistComponent } from './Gist.component';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';

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
        if (!this.state.loading) {
            return <GistComponent data={ this.state.data }/>
        }

        // Loading indicator
        const { gistId } = this.props;
        const gistUrl = GIST_URL_PREFIX + gistId;
        return <div>
            <div className="PageBlock">
                <h3>Your playground is loading...</h3>
            </div>

            <p>
                <LoadingIndicator />
            </p>

            <div className="PageBlock">
                <p>
                    Fetching Gist from <a href={gistUrl} target="_blank">{gistUrl}</a>...
                </p>
            </div>
        </div>
    }
}