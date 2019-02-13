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
                    You can load Github gists to this tool.
                </p>
                <form target="#" onSubmit={ this.onSubmit }>
                    <input placeholder="Gist ID" name="gistId" autoComplete="disabled" />
                    <button type="submit">Open</button>
                </form>
            </div>
        )
    }
}