import React from 'react';
import { withRouteData, Head } from 'react-static'
import { PAGE_TITLE_PREFIX } from '../shared/consts';
import { PlaygroundWrapper } from './PlaygroundWrapper';


export default withRouteData((props) => (
    <React.Fragment>
        <Head>
            <title>{PAGE_TITLE_PREFIX} for {props.libraryName} {props.exampleName}</title>
        </Head>
        <PlaygroundWrapper code={props.exampleCode} />
    </React.Fragment>
))