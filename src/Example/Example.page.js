import React from 'react';
import { withRouteData, Head } from 'react-static'
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';


export default withRouteData((props) => (
    <React.Fragment>
        <Head>
            <title>{props.libraryName} {props.exampleName} example</title>
        </Head>
        <PlaygroundWrapper code={props.exampleCode} />
    </React.Fragment>
))