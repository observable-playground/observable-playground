import React from 'react'
import { Link } from '@reach/router';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';

export default () => (
    <React.Fragment>
        <div className="PageBlock">
            <h3>Your playground is loading...</h3>
        </div>

        <p>
            <LoadingIndicator />
        </p>

        <div className="PageBlock">
            <p>
                If it takes too long to load, you might:
            </p>

            <ul>
                <li>Get to the <b><Link to="/">home page</Link></b> and start exploring other playgrounds</li>
                <li>Check out <b><Link to="/rxjs/of/">RxJS of()</Link></b> operator example and build on top of it</li>
                <li>Submit an issue at <a href="https://github.com/observable-playground/observable-playground" target="_blank">github project page</a> to report this case</li>
            </ul>

            <br />
        </div>
    </React.Fragment>
)
