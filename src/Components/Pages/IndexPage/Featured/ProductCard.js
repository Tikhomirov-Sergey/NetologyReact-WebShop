import React, { Component } from 'react';
import PropTypes from 'prop-types';

import shopConfig from '../../../../Config/ShopConfig';

export default class ProductCard extends Component {

    render() {
        return (
            <div className="new-deals__product-info">
                <a href="#" className="h3">{this.props.title}</a>
                <p>Производитель:
                    <span>{this.props.brand}</span>
                </p>
                <h3 className="h3">{`${this.props.price} ${shopConfig.currency}`}</h3>
            </div>
        );
    }
}

ProductCard.PropTypes = {
   id:PropTypes.string.isRequired,
   title:PropTypes.string.isRequired,
   brand:PropTypes.string,
   price:PropTypes.string.isRequired
};
