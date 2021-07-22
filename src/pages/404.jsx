import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ExternalLink } from '../shared/ExternalLink';
import { isClient } from '../shared/isServer';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';

// the issue with /gist/* pages is that they are not static pages
// therefore these need time to load scripts to load a proper ui
// so here we're showing half loading, half 404 state to the user

export default function Page404() {
    const router = useRouter();

    useEffect(() => {
        if (isClient()) {
            let currentUrl = router.asPath;
            if (/^\/gist\/.*?\/?$/.test(currentUrl)) {
                if (!currentUrl.endsWith('/')) {
                    currentUrl += '/';
                }
                router.replace('/gist/[id]/', currentUrl);
            }
        }
    }, [isClient(), router.asPath]);

    return (
        <div className="PageNotFound">
            <div className="PageBlock">
                <h3>Your playground is loading...</h3>
            </div>

            <p>
                <LoadingIndicator />
            </p>

            <div className="PageBlock">
                <p>
                    If it takes too long to load, you may:
                </p>

                <ul>
                    <li>Go to the <b><Link href="/"><a>home page</a></Link></b> and start exploring other playgrounds</li>
                    <li>Check out <b><Link href="/[libId]/[fileId]" as="/rxjs/of/"><a>RxJS of()</a></Link></b> operator example and build on top of it</li>
                    <li>Submit an issue at <ExternalLink href="https://github.com/observable-playground/observable-playground">github project page</ExternalLink> to report this case</li>
                </ul>

                <br />
            </div>
        </div>
    )
}