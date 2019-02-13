import React, { Component } from 'react'
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper'

export class GistFileComponent extends Component {
    render(){
        const { file } = this.props;

        if (/.*\.js/.test(file.filename)) {
            return <PlaygroundWrapper
                key={file.filename}
                code={file.content}
            />
        } else {
            return <div className="PageBlock">
                <pre>{file.content}</pre>
            </div>
        }
    }
}