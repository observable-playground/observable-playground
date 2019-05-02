import React from 'react';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import ReactMarkdown from 'react-markdown';
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import './Example.component.css';


export function ExampleComponent(props) {
    const example = props.example;
    // NOTE: 01 May 2019
    // outdated branch for cached routeInfo.json files
    if (example.files) {
        return example.files.map(file => (
            <div
                className="ExampleComponent__FileEntry"
                key={file.name}
            >{renderFile(file)}</div>
        ));
    }

    return (
        <div className="ExampleComponent">
            <div  className="ExampleComponent__Title">
                <h1>{ example.title }&nbsp;{
                    example.docsUrl &&
                        <a
                            target="_blank"
                            className="ExampleComponent__DocsLink"
                            title="Official docs"
                            href={example.docsUrl}
                        ><FontAwesomeIcon icon={faBook} style={{ width: '0.5em' }} /></a>
                    }<a
                        target="_blank"
                        className="ExampleComponent__EditLink"
                        title="Edit this file on Github"
                        href={example.editUrl}
                        rel="nofollow noreferrer"
                    ><FontAwesomeIcon icon={faPencilAlt} style={{ width: '0.5em' }} /></a>
                </h1>
            </div>
            { renderMdContent(example.content) }
        </div>
    );
}

const testIfUriIsLocal = (uri) => /^\/[^\/]/.test(uri);
const linkTargetRenderer = (uri) => testIfUriIsLocal(uri) ? undefined : '_blank';

function linkRenderer({ href, target, children }) {
    return testIfUriIsLocal(href)
        ? <Link to={href} target={target} children={children} />
        : <a href={href} target={target} children={children} />
}

function codeRenderer({ language, value }) {
    return <PlaygroundWrapper code={value} />;
}

function renderFile(file) {
    if (file.ext == '.js') {
        return renderJsContent(file.content);
    }

    if (file.ext == '.md') {
        return renderMdContent(file.content);
    }

    return <div>File type "{file.ext}" is not supported</div>
}

function renderJsContent(content) {
    return <PlaygroundWrapper code={content} />;
}

function renderMdContent(content) {
    return (
        <div className="PageBlock">
            <ReactMarkdown
                escapeHtml={/* UNSAFE, ONLY FOR EXAMPLES*/ false}
                source={content}
                linkTarget={linkTargetRenderer}
                renderers={
                    {
                        link: linkRenderer
                        , code: codeRenderer
                    }
                }
            />
        </div>
    );
}