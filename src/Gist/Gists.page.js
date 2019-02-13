import React, { Component } from 'react'
import { navigate } from "@reach/router"

export class GistsPageComponent extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        const gistId = event.target.gistId.value;
        if (!gistId) {
            return;
        }

        navigate('/gist/' + gistId);
    }

    render(){
        return (
            <div className="GistsPage PageBlock">
                <p>
                    Enter Github Gist ID to load
                </p>

                <form target="#" onSubmit={ this.onSubmit }>
                    <input placeholder="Gist ID" name="gistId" autoComplete="off" />
                    <button type="submit">Open</button>
                </form>

                <p>
                    Scheme: <i>https://gist.github.com/name/<b>Gist_ID</b></i>
                </p>
            </div>
        )
    }
}