import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css'
import { GistContainer } from './Gist/Gist/Gist.container.js';
import { Sidebar } from './shared/Sidebar/Sidebar.js';
import { LoadingIndicator } from './shared/LoadingIndicator/LoadingIndicator';
import { Logo } from './shared/Logo/Logo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuVisible: false
        };

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
    }

    hideMobileMenu(){
        if (!this.state.mobileMenuVisible) {
            return;
        }

        this.setState({
            mobileMenuVisible: false
        });
    }

    toggleMobileMenu(){
        this.setState({
            mobileMenuVisible: !this.state.mobileMenuVisible
        })
    }

    isLinkHeaderActive({ isCurrent }) {
        return isCurrent
            ? { className: "App__logo active" }
            : { className: "App__logo" }
            ;
    }

    render(){
        return (
            <Root>
                <div className="App">
                    <div className="App__MobileHeader">
                        <button
                            className={ 'App__MobileMenuSwitch ' + (this.state.mobileMenuVisible ? ' active' : '') }
                            onClick={ this.toggleMobileMenu }
                        ><FontAwesomeIcon icon={faBars} /></button>


                        <span
                            onClick={this.hideMobileMenu}
                        ><Logo /></span>

                        <span className="App__header-spring"></span>

                        <a
                            target="_blank"
                            className="App__twitter-link"
                            title="Follow me on twitter"
                            href="https://twitter.com/kddsky"
                        ><FontAwesomeIcon icon={faTwitter} 
                            style={ { width: '1em' } }
                        /></a>

                        <a
                            target="_blank"
                            className="App__github-link"
                            title="Star the project"
                            href="https://github.com/observable-playground/observable-playground"
                        ><FontAwesomeIcon icon={faStar}
                            style={ { width: '1em' } }
                        /></a>

                        <a
                            target="_blank"
                            className="App__github-link"
                            title="See the source code on GitHub"
                            href="https://github.com/observable-playground/observable-playground/issues"
                        ><FontAwesomeIcon icon={faGithub}
                            style={ { width: '1em' } }
                        /></a>
                    </div>

                    <div className="App__body">
                        <div className={ 'App__contents' + (this.state.mobileMenuVisible ? ' hidden' : '')  }>
                            <React.Suspense fallback={<LoadingIndicator />}>
                                <Router basepath="/">
                                    <Routes path="/gist" />
                                    <GistContainer path="/gist/:gistId" />
                                    <Routes default />
                                </Router>
                            </React.Suspense>
                        </div>

                        <React.Suspense fallback={<LoadingIndicator />}>
                            <div
                                className={'App__menu' + (this.state.mobileMenuVisible ? ' visible' : '')}
                                onClick={this.hideMobileMenu}
                            ><Sidebar /></div>
                        </React.Suspense>
                    </div>
                </div>
            </Root>
        );
    }
}

export default App
