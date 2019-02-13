import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import { MenuComponent } from './Menu/MenuComponent.js';

import { version as APP_VERSION } from '../package.json';

import './App.css'

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
                <Routes />
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
