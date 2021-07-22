import React, { Component, useMemo } from 'react'
import { Playground } from '../../Playground/Playground'
import style from './GistFile.module.scss';
import { ExternalLink } from '../../shared/ExternalLink';
import ReactMarkdown from 'react-markdown';

export class GistFileComponent extends Component {
    render(){
        const { file } = this.props;
        const ext = /^.*(\..+)+?$/.exec(file.filename) || [];

        let File;
        switch (ext[1]) {
            case '.js': {
                File = JSFile;
                break;
            }
            case '.svg': {
                File = SVGFile;
                break;
            }
            case '.md': {
                File = MDFile;
                break;
            }
            default: {
                File = DefaultFile;
            }
        }

        return (
            <div className={style.GistFile}>
                <div className={style.GistFile__Name}>{file.filename}</div>
                <div className="PageBlock">
                    <div className={style.GistFile__Content + ' DangerousContentWidth'}>
                        <File file={file} />
                    </div>
                </div>
            </div>
        )
    }
}

function JSFile(props) {
    return <Playground
        code={props.file.content}
        />
}

function SVGFile(props) {
    const url = useMemo(() => 'data:image/svg+xml;base64,' + btoa(props.file.content), [props.file.content]);
    return <img src={url} />;
}

function MDFile(props) {
            return <ReactMarkdown
                escapeHtml={false}
                source={props.file.content}
                renderers={
                    {
                        link: ({ href, children }) => <ExternalLink href={href} children={children} />
                    }
                }
            />
}

function DefaultFile(props) {
    return props.file.content;
}