import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Nav extends Component {

    render() {
        return (
            <nav className="main-menu">
                <div className="wrapper">
                    <ul className="main-menu__items">
                        {
                            this.props.items.map((item) => {
                                return (
                                    <li className={`main-menu__item ${item.className ? item.className : ""}`} key={item.text} >
                                        <NavLink to={item.to}>{item.text}</NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

Nav.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        to:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        className:PropTypes.string
    }))
};