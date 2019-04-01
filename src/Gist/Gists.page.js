import React, { Component } from 'react'
import { navigate } from "@reach/router"
import { Head } from 'react-static'

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
            <React.Fragment>
            <Head>
                <title>Load a gist</title>
            </Head>
            <div
                key="GistsPage"
                className="GistsPage PageBlock"
            >
                <h1>Load a gist and share it with others</h1>

                <form target="#" onSubmit={ this.onSubmit }>
                    <input placeholder="Gist ID" name="gistId" autoComplete="off" />
                    <button type="submit">Open</button>
                </form>

                <p>
                    <i>https://gist.github.com/name/<b>Gist_ID</b></i>
                </p>
            </div>
            </React.Fragment>
        )
    }
}