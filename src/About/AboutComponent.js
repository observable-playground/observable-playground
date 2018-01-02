import React, { Component } from 'react';
import './AboutComponent.css';

export class AboutComponent extends Component {
    render() {
        const ExternalLink = ({ href, text })=>
            (<a href={ href } target="_blank" rel="noopener noreferrer">{ text || href }</a>);

        return (
            <div className="AboutComponent">
                <p>
                    Learn <ExternalLink href={ 'http://reactivex.io/rxjs/' } text={'RxJS'}/> before deploying to production
                </p>

                <p>
                    Please, check the source codes of this project at <ExternalLink href={ 'https://github.com/observable-playground/observable-playground' } />
                </p>

                <p>
                    Inspired by <ExternalLink href={ 'http://rxmarbles.com/' } text={ 'rxmarbles.com' } />, <ExternalLink href={ 'https://www.learnrxjs.io' } text={'learnrxjs.io'}/> and great talks by <ExternalLink href={ 'http://worrydream.com/' } text={'Bret Victor'} />
                </p>
            </div>
        );
    }
}