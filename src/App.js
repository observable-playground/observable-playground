import React from 'react'
import { Root, Routes } from 'react-static'
import { Router, Link } from '@reach/router'
import { MenuComponent } from './shared/Menu/MenuComponent.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { version as APP_VERSION } from '../package.json';

import './App.css'
import { GistContainer } from './Gist/Gist/Gist.container.js';

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
                    <div className="App__header">
                        <button
                            className={ 'App__MobileMenuSwitch ' + (this.state.mobileMenuVisible ? ' active' : '') }
                            onClick={ this.toggleMobileMenu }
                        ><FontAwesomeIcon icon={faBars} /></button>

                        <Link 
                            to="/"
                            onClick={ this.hideMobileMenu }
                            getProps={ this.isLinkHeaderActive }
                        >
                            <span className="App__logo_main">Observable</span> Playground
                        </Link>

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
                            title="Check the source code on GitHub"
                            href="https://github.com/observable-playground/observable-playground"
                        ><FontAwesomeIcon icon={faGithub}
                            style={ { width: '1em' } }
                        /></a>
                    </div>

                    <div className="App__body">
                        <div className={ 'App__contents' + (this.state.mobileMenuVisible ? ' hidden' : '')  }>
                            <Router basepath="/">
                                <Routes path="/gist" />
                                <GistContainer path="/gist/:gistId" />
                                <Routes default />
                            </Router>
                        </div>

                        <div
                            className={ 'App__menu' + (this.state.mobileMenuVisible ? ' visible' : '') }
                            onClick={this.hideMobileMenu}
                        ><MenuComponent /></div>
                    </div>
                </div>
            </Root>
        );
    }
}

export default App
