import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faBook, faEnvelopeSquare, faPencilAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PlaygroundWrapper } from '../Playground/PlaygroundWrapper';
import { ExternalLink } from '../shared/ExternalLink';
import style from './Example.component.module.scss';

export function ExampleComponent(props) {
    const example = props.example;
    const router = useRouter();
    const url = router.asPath;
    const { libId, fileId } = router.query;
    const shareUrl = `https://thinkrx.io${url}`;
    const twitterText = encodeURIComponent(`Check out this #${libId} "${fileId}" playground by @kddsky #javascript\n\n\n${shareUrl} ❤️`);

    const emailSubjectText = encodeURIComponent(`Check out this #${libId} ${fileId} example`);
    const emailBodyText = encodeURIComponent(`${shareUrl}`);
    const mailLink = `mailto:friend@example.com&subject=${emailSubjectText}&body=${emailBodyText}`;

    return (
        <div className={style.ExampleComponent}>
            <div className={style.title}>
                <h1>{example.title}</h1>

                <span className={style.controls}>
                    { example.docsUrl &&
                        <ExternalLink
                            className={style.control__docs}
                            title="Official docs"
                            href={example.docsUrl}
                        ><FontAwesomeIcon fixedWidth icon={faBook} style={{ maxWidth: '3rem' }} /></ExternalLink>
                    }<ExternalLink
                        className={style.control__edit}
                        title="Edit this file on Github"
                        href={example.editUrl}
                    ><FontAwesomeIcon fixedWidth icon={faPencilAlt} style={{ maxWidth: '3rem' }} /></ExternalLink>
                </span>

                <span className={style.spring} />

                <span className={style.share}>
                    <FontAwesomeIcon
                        fixedWidth
                        icon={faShareAlt}
                        style={{ maxWidth: '3rem' }}
                        />

                    &nbsp;

                    <ExternalLink
                        className={style.share__twitter}
                        title="Share to twitter"
                        href={`https://twitter.com/intent/tweet?text=${twitterText}`}
                    ><FontAwesomeIcon fixedWidth icon={faTwitterSquare} style={{ maxWidth: '3rem' }} /></ExternalLink>

                    <ExternalLink
                        className={style.share__linkedin}
                        title="Share to LinkedIn"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&text=${twitterText}`}
                    ><FontAwesomeIcon fixedWidth icon={faLinkedin} style={{ maxWidth: '3rem' }} /></ExternalLink>

                    <ExternalLink
                        className={style.share__email}
                        title="Share via email"
                        href={mailLink}
                    ><FontAwesomeIcon fixedWidth icon={faEnvelopeSquare} style={{ maxWidth: '3rem' }} /></ExternalLink>
                </span>
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
