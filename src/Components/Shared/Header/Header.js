import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import '../../../css/style.css';

import TopMenu from './TopMenu';


export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <TopMenu/>
            </div>
        );
    }
}
