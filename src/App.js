import React, { Component } from 'react';
import {HashRouter, Switch, Router, Route, BrowserRouter} from 'react-router-dom';

import './css/style.css';
import './css/normalize.css';
import './css/style-catalogue.css';
import './css/font-awesome.min.css';
import './css/style-favorite.css';
import './css/style-order.css';
import  './css/style-product-card.css';

import Header from './Components/Shared/Header/Header';
import IndexPage from './Components/Pages/IndexPage/IndexPage'
import Footer from "./Components/Shared/Footer/Footer";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="container">
              <Header/>
              <Route path="/" exact component={IndexPage} />
              <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
