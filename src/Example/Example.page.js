import React from 'react';
import { withRouteData, Head } from 'react-static'
import { ExampleComponent } from './Example.component';


class ExamplePage extends React.Component {
    shouldComponentUpdate(nextProps) {
        const props = this.props;
        return props.libraryName !== nextProps.libraryName
            || props.exampleName !== nextProps.exampleName
            // || props.exampleCode !== nextProps.exampleCode
            ;
    }

    render(){
        const { libraryName, exampleName, example } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <title>{ example.pageTitle || `${libraryName} ${exampleName} example and playground` }</title>
                    <meta name="description" content={ example.desc || `Test and explore ${libraryName} \"${exampleName}\" behavior and other reactive programming code examples in this marble visualisation playground`} />
                </Head>
                <ExampleComponent key="ExampleComponent" example={ example }/>
            </React.Fragment>
        )
    }
}

export default withRouteData(ExamplePage);