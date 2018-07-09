import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderPhone from "./HeaderPhone";
import HeaderLogo from "./HeaderLogo";

import HeaderButtons from "./HeaderButtons";

export default class HeaderMain extends Component {

    render() {
        return (
            <div className="header-main">
                <div className="header-main__wrapper wrapper">
                    <HeaderPhone {...this.props.headerPhone}/>
                    <HeaderLogo {...this.props.headerLogo} />
                    <HeaderButtons/>
                </div>
            </div>
        );
    }
}

HeaderMain.propTypes = {
    headerPhone:PropTypes.object.isRequired,
    headerLogo:PropTypes.object.isRequired
};