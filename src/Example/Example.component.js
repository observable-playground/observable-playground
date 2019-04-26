import React from 'react';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import ReactMarkdown from 'react-markdown';
import { Link } from '@reach/router'
import './Example.component.css';


const testIfUriIsLocal = (uri) => /^\/[^\/]/.test(uri);

const linkTargetRenderer = (uri) => testIfUriIsLocal(uri) ? undefined : '_blank';

const linkRenderer =
    ({ href, target, children }) =>
        testIfUriIsLocal(href)
        ? <Link to={href} target={target} children={children} />
        : <a href={href} target={target} children={children} />

export class ExampleComponent extends React.Component {
    renderFile(file){
        if(file.ext == '.js') {
            return <PlaygroundWrapper code={file.content}/>;
        }

        if (file.ext == '.md') {
            return (
                <div className="PageBlock">
                    <ReactMarkdown
                        escapeHtml={/* UNSAFE, ONLY FOR EXAMPLES*/ false }
                        source={file.content}
                        linkTarget={ linkTargetRenderer }
                        renderers={
                            { link: linkRenderer }
                        }
                    />
                </div>
            );
        }

        return <div>File type "{file.ext}" is not supported</div>
    }

    render(){
        return this.props.example.files.map(file => (
            <div
                className="ExampleComponent__FileEntry"
                key={file.name}
            >{this.renderFile(file)}</div>
        ));
    }
}