import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeaderPhone extends Component {

    render() {
        return (
            <div className="header-main__phone">
                <a href={`tel:${this.props.tel.tel}`}>{this.props.tel.text}</a>
                <p>{this.props.workingTime.text}</p>
            </div>
        );
    }
}

HeaderPhone.propTypes = {
    tel:PropTypes.shape({
        tel:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    }),
    workingTime:PropTypes.shape({
        text:PropTypes.string.isRequired
    })
};
