import React, { Component } from 'react';

import Subscribe from './Subscribe'
import FooterMenus from './FooterMenu/FooterMenus';
import FooterInfo from './FooterInfo';
import FooterContacts from './FooterContacts';

import footerConfig from '../../../Config/FooterConfig';

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <Subscribe {...footerConfig.subscribe} />
                <div className="footer__bottom">
                    <div className="wrapper">
                        <FooterMenus menus={footerConfig.footerMenu}/>
                        <FooterInfo {...footerConfig.footerInfo}/>
                        <FooterContacts {...footerConfig.footerContacts} />
                    </div>
                </div>
            </footer>
        );
    }
}
