import React from 'react';
import { withRouteData, Head } from 'react-static'
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';

class ExamplePage extends React.Component {
    shouldComponentUpdate(nextProps) {
        const props = this.props;
        return props.libraryName !== nextProps.libraryName
            || props.exampleName !== nextProps.exampleName
            || props.exampleCode !== nextProps.exampleCode
            ;
    }

    render(){
        const { libraryName, exampleName, exampleCode } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{libraryName} {exampleName} example and playground</title>
                    <meta name="description" content={`Test and explore ${libraryName} \"${exampleName}\" behavior and other reactive programming code examples in this marble visualisation playground`} />
                </Head>
                <PlaygroundWrapper code={exampleCode} />
            </React.Fragment>
        )
    }
}

export default withRouteData(ExamplePage);