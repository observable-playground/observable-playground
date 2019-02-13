import React from 'react'
import { withRouteData, Head } from 'react-static'
import { PAGE_TITLE_PREFIX } from '../shared/consts';

export default withRouteData(({ handle, library }) => (
  <div className="PageBlock">
    <Head>
        <title>{ PAGE_TITLE_PREFIX } for { library.name }</title>
    </Head>

    <h1>{library.name} Playground</h1>

    <p>{library.description}</p>

  </div>
))
