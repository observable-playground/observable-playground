import React from 'react'
import { Root, Routes } from 'react-static'
import { Router, Link } from '@reach/router'
import { MenuComponent } from './shared/Menu/MenuComponent.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


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
        this.setState(() => {
            return {
                mobileMenuVisible: false
            };
        })
    }

    toggleMobileMenu(){
        this.setState(state => {
            return {
                mobileMenuVisible: !state.mobileMenuVisible
            };
        })
    }

    render(){
        const isLinkHeaderActive = 
            ({ isCurrent }) =>
                isCurrent
                ? { className: "App__logo active" }
                : { className: "App__logo" };

        const header = () => (
            <div className="App__header">
                <button
                    className={ 'App__MobileMenuSwitch ' + (this.state.mobileMenuVisible ? ' active' : '') }
                    onClick={ this.toggleMobileMenu }
                ><FontAwesomeIcon icon={faBars} /></button>

                <Link 
                    to="/"
                    onClick={ this.hideMobileMenu }
                    getProps={ isLinkHeaderActive }
                >
                    <span className="App__logo_main">Observable</span> Playground
                </Link>

                <a
                    target="_blank"
                    className="App__github-link"
                    title="Open GitHub project page"
                    href="https://github.com/observable-playground/observable-playground"
                ><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        );

        const body = ()=>(
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
        );

        const footer = ()=>(
            <div className="App__footer">
                v{ APP_VERSION }
            </div>
        );

        return (
            <Root>
                <div className="App">
                    { header() }
                    { body() }
                    { footer() }
                </div>
            </Root>
        );
    }
}

export default App
