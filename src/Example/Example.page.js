import React from 'react';
import { withRouteData, Head } from 'react-static'
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';


export default withRouteData((props) => (
    <React.Fragment>
        <Head>
            <title>{props.libraryName} {props.exampleName} example and playground</title>
            <meta name="description" content={ `Test and explore ${props.libraryName} \"${props.exampleName}\" behavior and other reactive programming code examples in this marble visualisation playground` } />
        </Head>
        <PlaygroundWrapper code={props.exampleCode} />
    </React.Fragment>
))