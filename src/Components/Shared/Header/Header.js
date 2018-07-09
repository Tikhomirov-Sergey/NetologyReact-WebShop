import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import TopMenu from './TopMenu';
import HeaderMain from './HeaderMain/HeaderMain';
import Nav from './Nav';

import headerConfig from '../../../Config/HeaderConfig';

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <TopMenu items={headerConfig.topMenu} />
                <HeaderMain {...headerConfig.headerMain} />
                <Nav items={headerConfig.nav}/>
            </div>
        );
    }
}
