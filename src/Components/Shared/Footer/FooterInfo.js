import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FooterInfo extends Component {

    render() {
        return (
            <div className="footer__info">
                <h3 className="footer__info_title">{this.props.paidSystem.title}</h3>
                <div className="footer__paid-systems">

                    {
                        this.props.paidSystem.items.map((item) => {
                            return (
                                <div className={`footer__paid ${item.className}`} key={item.className}/>
                            );
                        })
                    }

                </div>
                <div className="footer__social-links">
                    <h3 className="footer__social-links_title">{this.props.socialLinks.title}</h3>

                    {
                        this.props.socialLinks.items.map((item) => {
                            return (
                                <div className={`footer__social-link ${item.className}`} key={item.className}/>
                            )
                        })
                    }

                </div>
                <div className="footer__copyright">
                    2009-{new Date().getYear()} © BosaNoga.ru — модный интернет-магазин обуви<br/> и аксессуаров. Все права защищены. Доставка по всей России!
                </div>
            </div>
        );
    }
}

FooterInfo.propTypes = {
    paidSystem:PropTypes.shape({
        title:PropTypes.string.isRequired,
        items:PropTypes.arrayOf(PropTypes.shape({
            className:PropTypes.string.isRequired
        }))
    }),
    socialLinks:PropTypes.shape({
        title:PropTypes.string.isRequired,
        items:PropTypes.arrayOf(PropTypes.shape({
            className:PropTypes.string.isRequired
        }))
    })
};
