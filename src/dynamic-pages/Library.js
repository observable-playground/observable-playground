import React from 'react'
import { withRouteData, Head } from 'react-static'

export default withRouteData(({ library }) => (
  <div className="PageBlock">
    <Head>
        <title>{ library.name } examples and playground</title>
    </Head>

    <h1>{library.name}</h1>

    <p>{library.description}</p>

  </div>
))
