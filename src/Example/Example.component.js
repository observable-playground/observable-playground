import React from 'react';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import ReactMarkdown from 'react-markdown';
import './Example.component.css';


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