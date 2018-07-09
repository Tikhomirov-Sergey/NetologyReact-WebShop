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
                                    <li className={`main-menu__item ${item.className}`}>
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