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

                    <div className="App__header">
                        <NavLink
                            to={ '/' }
                            className="App__logo"
                        >
                            <span className="App__logo_main">Reactive</span> Playground
                        </NavLink>
                    </div>

                    <div className="App__body">
                        <div className="App__menu">
                            <MenuComponent></MenuComponent>
                        </div>

                        <div className="App__contents">
                            <Route exact={ true } path='/about' component={ AboutComponent }/>

                            <Route exact={ true } path='/:libraryHandle/:exampleHandle' component={ PlaygroundRoutingContainer }/>

                            {/* redirecting to a default route */}
                            <Route exact={ true } path={ '/' } render={ ()=>
                                <Redirect to={{ pathname: '/rxjs/interval' }}/>
                            }/>

                        </div>
                    </div>


                </div>
            </Router>
        );
    }
}

export default App;
