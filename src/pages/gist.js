import React from 'react';
import { GistsPageComponent } from '../Gist/Gists.page';
import { Head } from 'react-static'

export default () =>
    <React.Fragment>
        <Head>
            <title>Load a github gist</title>
        </Head>
        <GistsPageComponent />
    </React.Fragment>