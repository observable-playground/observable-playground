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

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div className="App__header row">
                        <div className="col-xs-1"></div>
                        <div className="col-xs-5">
                            <NavLink
                                to={ '/' }
                                className="App__logo"
                            >
                                <span className="App__logo_main">Reactive</span> Playground
                            </NavLink>

                        </div>
                    </div>


                    <Route exact={ true } path={ '/' } render={ ()=>
                        <Redirect to={{ pathname: '/rxjs-interval' }}/>
                    }/>

                    <div className="row">
                        <div className="col-xs-1">
                            <MenuComponent></MenuComponent>
                        </div>

                        <div className="col-xs-11">
                            <Route exact={ true } path='/about' component={ AboutComponent }/>

                            <Route exact={ true } path='/rxjs-:handle' component={ PlaygroundRoutingContainer }/>
                        </div>
                    </div>


                </div>
            </Router>
        );
    }
}

export default App;
