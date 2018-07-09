import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeaderButtons extends Component {

    render() {
        return (
            <div className="header-main__profile">
                <div className="header-main__pics">
                    <div className="header-main__pic header-main__pic_search">

                    </div>
                    <div className="header-main__pic_border"/>
                    <div className="header-main__pic header-main__pic_profile">
                        <div className="header-main__pic_profile_menu"/>
                    </div>
                    <div className="header-main__pic_border"/>
                    <div className="header-main__pic header-main__pic_basket">
                        <div className="header-main__pic_basket_full">1</div>
                        <div className="header-main__pic_basket_menu"/>
                    </div>
                </div>
                <form className="header-main__search" action="#">
                    <input placeholder="Поиск"/>
                        <i className="fa fa-search" aria-hidden="true"/>
                </form>
            </div>
        );
    }
}

/*HeaderInfo.propTypes = {
    tel:PropTypes.shape({
        tel:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    }),
    workingTime:PropTypes.shape({
        text:PropTypes.string.isRequired
    }),
    logo:PropTypes.shape({
        src:PropTypes.string.isRequired,
        alt:PropTypes.string.isRequired
    }),
    info:PropTypes.shape({
        text:PropTypes.string.isRequired
    })
};*/