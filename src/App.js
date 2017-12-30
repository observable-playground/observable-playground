import React, { Component } from 'react';
import './App.css';
import {
    HashRouter as Router,
    Route,
    Redirect,
    NavLink
} from 'react-router-dom';
import { MenuComponent } from './Menu/MenuComponent';
import { AboutComponent } from './About/AboutComponent';
import { PlaygroundRoutingContainer } from './Playground/PlaygroundRoutingContainer';
import Switch from 'react-router-dom/Switch';
import { version as APP_VERSION } from '../package.json';

class App extends Component {
    render() {
        const redirectToDefaultExample = ()=>(
            <Redirect to={{ pathname: '/rxjs/interval' }} />
        );

        const header = ()=>(
            <div className="App__header">
                <NavLink
                    to={ '/' }
                    className="App__logo"
                >
                    <span className="App__logo_main">Reactive</span> Playground
                </NavLink>
            </div>
        );

        const body = ()=>(
            <div className="App__body">
                <div className="App__menu">
                    <MenuComponent></MenuComponent>
                </div>

                <div className="App__contents">
                    <Switch>
                        <Route exact path={ '/' } render={ redirectToDefaultExample }/>
                        <Route path='/about' component={ AboutComponent }/>
                        <Route path='/:libraryHandle/:exampleHandle' component={ PlaygroundRoutingContainer }/>
                        <Route render={ redirectToDefaultExample }/>
                    </Switch>

                </div>
            </div>
        );

        const footer = ()=>(
            <div className="App__footer">
                v{ APP_VERSION }
            </div>
        );

        return (
            <Router>
                <div className="App">
                    { header() }
                    { body() }
                    { footer() }
                </div>
            </Router>
        );
    }
}

export default App;
