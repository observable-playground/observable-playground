import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { isServer } from '../../shared/isServer';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import { GIST_URL_PREFIX } from './const';
import { GistComponent } from './Gist.component';
import { ExternalLink } from '../../shared/ExternalLink';

export function GistContainer (props){
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);

    const { gistId } = props;

    useEffect(() => {
        if (isServer() || !gistId) { return; }

        axios
            .get(`https://api.github.com/gists/${gistId}`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            });
    }, [isServer(), gistId])

    if (!isLoading) {
        return <GistComponent data={ data }/>
    }

    // Loading indicator
    const gistUrl = GIST_URL_PREFIX + gistId;
    return <div>
        <div className="PageBlock">
            <h3>Your playground is loading...</h3>
        </div>

        <p>
            <LoadingIndicator />
        </p>

        <div className="PageBlock">
            <p>
                <span className="DangerousContentWidth">
                    Fetching Gist from <ExternalLink href={gistUrl}>{gistUrl}</ExternalLink>...
                </span>
            </p>
        </div>
    </div>
}