import { faBook, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import { ExternalLink } from '../shared/ExternalLink';
import style from './Example.component.module.scss';

export function ExampleComponent(props) {
    const example = props.example;
    // NOTE: 01 May 2019
    // outdated branch for cached routeInfo.json files
    if (example.files) {
        return example.files.map(file => (
            <div
                className={style.ExampleComponent__FileEntry}
                key={file.name}
            >{renderFile(file)}</div>
        ));
    }

    return (
        <div className={style.ExampleComponent}>
            <div  className={style.ExampleComponent__Title}>
                <h1>{ example.title }&nbsp;{
                    example.docsUrl &&
                        <ExternalLink
                            className={style.ExampleComponent__DocsLink}
                            title="Official docs"
                            href={example.docsUrl}
                        ><FontAwesomeIcon icon={faBook} style={{ width: '0.5em' }} /></ExternalLink>
                    }<ExternalLink
                        className={style.ExampleComponent__EditLink}
                        title="Edit this file on Github"
                        href={example.editUrl}
                    ><FontAwesomeIcon icon={faPencilAlt} style={{ width: '0.5em' }} /></ExternalLink>
                </h1>
            </div>
            { renderMdContent(example.content) }
        </div>
    );
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

// renderers
function testIfUriIsLocal(uri) { return /^\/[^\/]/.test(uri); }

function linkRenderer({ href, children }) {
    return testIfUriIsLocal(href)
    ? <a href={href} children={children} />
    : <ExternalLink href={href} children={children} />
}

function codeRenderer({ value }) {
    return <PlaygroundWrapper code={value} />;
}
