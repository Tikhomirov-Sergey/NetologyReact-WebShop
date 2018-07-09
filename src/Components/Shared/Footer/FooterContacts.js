import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FooterInfo extends Component {

    render() {
        return (
            <div className="footer__contacts"><a className="footer__phone" href={`tel:${this.props.tel.tel}`}>{this.props.tel.text}</a>
                <p className="footer__phone_text">{this.props.workingTime.text}</p><a className="footer__email" href={`mailto:${this.props.email.email}`}>{this.props.email.text}</a>
            </div>
        );
    }
}

FooterInfo.propTypes = {
    tel:PropTypes.shape({
        tel:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    }),
    workingTime:PropTypes.shape({
        text:PropTypes.string.isRequired
    }),
    email:PropTypes.shape({
        email:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    })
};

