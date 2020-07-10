import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { ExternalLink } from '../shared/ExternalLink';

export function GistsPageComponent () {
    const router = useRouter();

    const onSubmit = useCallback((event) => {
        event.preventDefault();
        const gistId = event.target.gistId.value;
        if (!gistId) {
            return;
        }

        router.push('/gist/[id]', '/gist/' + gistId);
    });


    return <>
        <Head>
            <title>Share a gist</title>
            <meta
                name="description"
                content="Share your code and marble diagram via GitHub Gists"
                />
        </Head>

        <div
            key="GistsPage"
            className="GistsPage PageBlock"
        >
            <h1>Load a gist to share it with others</h1>

            <p>
                Instructions:
                <ol>
                    <li>Create a gist at <ExternalLink href="https://gist.github.com/">https://gist.github.com/</ExternalLink></li>
                    <li>Copy it's ID and paste it here to open your gist</li>
                </ol>
            </p>

            <form target="#" onSubmit={ onSubmit }>
                <input placeholder="Gist ID" name="gistId" autoComplete="off" />
                <button type="submit">Open</button>
            </form>

            <p>
                <i>https://gist.github.com/name/<b>Gist_ID</b></i>
            </p>

            <p>
                Try this <Link href="/gist/[id]" as="/gist/e89c9ba3de7896e8a38abec0570f9f70">example gist</Link>
            </p>
        </div>
    </>
}