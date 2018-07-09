import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TopMenu extends Component {

    render() {
        return (
            <div className="top-menu">
                <div className="wrapper">
                    <ul className="top-menu__items">
                        {
                            this.props.items.map((item) => {
                                return (
                                    <li className="top-menu__item" key={item.text}>
                                        <a href={item.link}>{item.text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

TopMenu.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        link:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    }))
};