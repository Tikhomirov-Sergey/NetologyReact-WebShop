import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FooterMenu from './FooterMenu';

export default class FooterMenus extends Component {

    render() {
        return (
            <div className="footer__menus">

                {
                    this.props.menus.map((menu) => {
                        return (
                            <div className={`footer__menu ${menu.className}`} key={menu.title}>{menu.title}
                                <FooterMenu items={menu.items}/>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

FooterMenus.propTypes = {
    menus:PropTypes.arrayOf(PropTypes.shape({
        title:PropTypes.string.isRequired,
        className:PropTypes.string.isRequired,
        items:PropTypes.arrayOf(PropTypes.object.isRequired)
    }))
};
