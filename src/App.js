import React, { Component } from 'react';
import './App.css';
import { Playground } from './Playground/Playground';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App_header">
                    <a
                        href="#"
                        className="App_logo"
                    ><span className="App_logo_main">Reactive</span> Playground</a>
                </div>
                <Playground></Playground>
            </div>
        );
    }
}

export default App;
