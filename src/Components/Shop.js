import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Header from './Components/Shared/Header/Header';
import './App.css';

class App extends Component {
    render() {
        return (<HashRouter>
                <div className="App">

                    <Route path="/" exact component={Header} />
                    <header className="App-header">
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>

                </div></HashRouter>
        );
    }
}

export default App;
