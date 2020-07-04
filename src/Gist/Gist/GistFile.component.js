import React, { Component } from 'react'
import { PlaygroundWrapper } from '../../Playground/PlaygroundWrapper'
import style from './GistFile.module.scss';

export class GistFileComponent extends Component {
    render(){
        const { file } = this.props;
        const isJSFile = /.*\.js/.test(file.filename);

        return (
            <div className={style.GistFile}>
                <div className={style.GistFile__Name}>{file.filename}</div>
                {
                    isJSFile
                    ? <PlaygroundWrapper
                        key={file.filename}
                        code={file.content}
                        />
                    : <div className="PageBlock">
                            <div className={style.GistFile__Content + ' DangerousContentWidth'}><pre>{file.content}</pre></div>
                    </div>
                }
            </div>
        )
    }
}