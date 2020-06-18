import React, { Component } from 'react'
import { Link, navigate } from "@reach/router"
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
                <h1>Load a gist to share it with others</h1>

                <p>
                    Instructions:
                    <ol>
                        <li>Create a gist at <a target="_blank" ref="noopener noreferrer" href="https://gist.github.com/">https://gist.github.com/</a></li>
                        <li>Copy it's ID and paste it here to open your gist</li>
                    </ol>
                </p>

                <form target="#" onSubmit={ this.onSubmit }>
                    <input placeholder="Gist ID" name="gistId" autoComplete="off" />
                    <button type="submit">Open</button>
                </form>

                <p>
                    <i>https://gist.github.com/name/<b>Gist_ID</b></i>
                </p>

                <p>
                    Try this <Link to="/gist/e89c9ba3de7896e8a38abec0570f9f70"> example gist</Link>
                </p>
            </div>
            </React.Fragment>
        )
    }
}