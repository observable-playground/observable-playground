import React from 'react'
import { Root, Routes } from 'react-static'
import { Router, Link } from '@reach/router'
import { MenuComponent } from './Menu/MenuComponent.js';

import { version as APP_VERSION } from '../package.json';

import './App.css'
import { GistContainer } from './Gist/Gist.container.js';

const App = () => {

  const header = ()=>(
        <div className="App__header">
            <Link 
                to="/"
                className="App__logo"
            >
                <span className="App__logo_main">Observable</span> Playground
            </Link>
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
