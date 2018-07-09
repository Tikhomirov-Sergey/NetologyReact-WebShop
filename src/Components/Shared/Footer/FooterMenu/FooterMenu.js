import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class FooterMenu extends Component {

    render() {
        return (
            <ul>

                {
                    this.props.items.map((item) => {
                      return (
                          <li>
                              <NavLink to={item.to}>{item.text}</NavLink>
                          </li>
                      );
                    })
                }

            </ul>
        );
    }
}
FooterMenu.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        to:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    }))
};
