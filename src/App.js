import React from 'react'
import { Root, Routes } from 'react-static'
import { Router, Link } from '@reach/router'
import { MenuComponent } from './shared/Menu/MenuComponent.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { version as APP_VERSION } from '../package.json';

import './App.css'
import { GistContainer } from './Gist/Gist/Gist.container.js';

const App = () => {

    const isLinkHeaderActive = 
        ({ isCurrent }) =>
            isCurrent
            ? { className: "App__logo active" }
            : { className: "App__logo" };

    const header = () => (
        <div className="App__header">
            <Link 
                to="/"
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
            <div className="App__contents">
                <Router>
                    <Routes path="/gist" />
                    <GistContainer path="/gist/:gistId" />
                    <Routes default />
                </Router>
            </div>

            <div className="App__menu">
                <MenuComponent />
            </div>
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

export default App
