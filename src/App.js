import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Header from './Components/Shared/Header/Header';

class App extends Component {
  render() {
    return (

      <div className="container">

          <Header/>
      </div>
    );
  }
}

export default App;
