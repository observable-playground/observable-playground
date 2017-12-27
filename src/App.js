import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    NavLink
} from 'react-router-dom';
import { MenuComponent } from './Menu/MenuComponent';
import { AboutComponent } from './About/AboutComponent';
import { PlaygroundRoutingContainer } from './Playground/PlaygroundRoutingContainer';

// NOTE: this should be taken from package.json, as its read from it for build
// see https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#building-for-relative-paths
const base = process.env.NODE_ENV === 'development' ? '' : 'reactive-playground';

class App extends Component {
    render() {
        return (
            <Router basename={ base }>
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
