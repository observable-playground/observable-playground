import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faBook, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Playground } from '../Playground/Playground';
import { ExternalLink } from '../shared/ExternalLink';
import style from './Example.component.module.scss';
import Link from 'next/link';

export function ExampleComponent(props) {
    const example = props.example;
    const router = useRouter();
    const url = router.asPath;
    const { libId, fileId } = router.query;
    const shareUrl = `https://thinkrx.io${url}`;
	const twitterText = encodeURIComponent(
		`#${libId.toUpperCase()} "${fileId}" playground\n`
		+ `🔗 ${shareUrl}\n`
		+ '\n'
		+ '❤️ #js #javascript #angular #webdevelopment by @kddsky'
	);

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
                        ><FontAwesomeIcon
                            fixedWidth
                            icon={faBook}
                            style={{ width: '1.5rem' }}
                        /></ExternalLink>
                    }
                    {/* <ExternalLink
                        className={style.control__edit}
                        title="Edit this file on Github"
                        href={example.editUrl}
                    ><FontAwesomeIcon fixedWidth icon={faPencilAlt} style={{ width: '2rem' }} /></ExternalLink> */}
                </span>

                <span className={style.spring} />

                <span className={style.share}>
                    <FontAwesomeIcon
                        fixedWidth
                        style={{ width: '1.5rem' }}
                        icon={faShareAlt}
                        />

                    &nbsp;

                    <ExternalLink
                        className={style.share__twitter}
                        title="Share to twitter"
                        href={`https://twitter.com/intent/tweet?text=${twitterText}`}
                    ><FontAwesomeIcon 
                        fixedWidth
                        style={{ width: '1.5rem' }}
                        icon={faTwitterSquare}
                    /></ExternalLink>

                    <ExternalLink
                        fixedWidth
                        className={style.share__linkedin}
                        title="Share to LinkedIn"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&text=${twitterText}`}
                    ><FontAwesomeIcon
                        fixedWidth
                        style={{ width: '1.5rem' }}
                        icon={faLinkedin}
                    /></ExternalLink>

                </span>
            </div>
            { renderMdContent(example.content) }
        </div>
    );
}

function renderMdContent(content) {
    return (
        <div className="PageBlock">
            <ReactMarkdown
                children={content}
                components={
                    {
                        a: linkRenderer
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
    if (!testIfUriIsLocal(href)) {
        return <ExternalLink href={href} children={children} />;
    }

    // NOTE: next/Link has preload and client-side navigation, so we have to substitute it here
    let length = href.split('/').filter(x => x).length;
    let _href = ['/', '/[libId]/', '/[libId]/[fileId]/'][length];
    if (_href) {
        return <Link href={_href} as={href}><a children={children} /></Link>
    }

    // fallback
    return <a href={href} children={children} />
}

function codeRenderer({ className,  children }) {
    let code = children[0];

    // NOTE: temp hack to distinguish js snippets from inline code spans
    if (className == 'language-js') {
        return <Playground code={code} />;
    } else {
        return <code children={children} />
    }
}
