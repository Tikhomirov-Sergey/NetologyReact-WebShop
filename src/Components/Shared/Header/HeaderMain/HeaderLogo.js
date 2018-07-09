import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeaderLogo extends Component {

    render() {
        return (
            <div className="header-main__logo">
                <a href="#">
                    <h1>
                        <img src={this.props.logo.src} alt={this.props.logo.alt} />
                    </h1>
                </a>
                <p>{this.props.info.text}</p>
            </div>
        );
    }
}

HeaderLogo.propTypes = {
    logo:PropTypes.shape({
        src:PropTypes.string.isRequired,
        alt:PropTypes.string.isRequired
    }),
    info:PropTypes.shape({
        text:PropTypes.string.isRequired
    })
};