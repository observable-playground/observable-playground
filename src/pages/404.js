import React from 'react'
import {Link} from '@reach/router';

export default () => (
  <div className="PageBlock">
    <h2>Page not found</h2>
    <h3>or we might still be loading some assets...</h3>

    <p>
        If this playground wont load, you might:
    </p>

    <ul>
        <li>Get to the <b><Link to="/">home page</Link></b> and start exploring new playgrounds</li>
        <li>Check out <b><Link to="/rxjs/of/">RxJS of</Link></b> operator example and build on top of it</li>
        <li>Submit an issue at <a href="https://github.com/observable-playground/observable-playground" target="_blank">github project page</a> for this case</li>
    </ul>

    <br />
  </div>
)
