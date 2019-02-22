import React, { Component } from 'react'
import { PlaygroundWrapper } from '../../Playground/PlaygroundWrapper'
import './GistFile.css';

export class GistFileComponent extends Component {
    render(){
        const { file } = this.props;
        const isJSFile = /.*\.js/.test(file.filename);

        return (
            <div className="GistFile">
                <div className="GistFile__Name">{file.filename}</div>
                {
                    isJSFile
                    ? <PlaygroundWrapper
                        key={file.filename}
                        code={file.content}
                        />
                    : <div className="PageBlock">
                        <div className="GistFile__Content"><pre>{file.content}</pre></div>
                    </div>
                }
            </div>
        )
    }
}