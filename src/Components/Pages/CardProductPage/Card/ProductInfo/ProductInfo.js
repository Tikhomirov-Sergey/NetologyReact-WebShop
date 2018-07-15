import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sizes from './Sizes';
import Favorite from './FavoriteProductInfo';
import Price from './Price';

import ProductCardConfig from '../../../../../Config/ProductCardConfig';


export default class ProductInfo extends Component {

    render() {
        return (
            <div className="main-screen__product-info">
                <div className="product-info-title"><h2>{this.props.productInfo.title}</h2><div className="in-stock">В наличии</div></div>
                <div className="product-features">
                    <table className="features-table">

                        {
                            ProductCardConfig.productInfo.map((item) => {
                                if(this.props.productInfo[item.key]) {
                                    return (
                                        <tr key={item.key}>
                                            <td className="left-col">{item.name}:</td>
                                            <td className="right-col">{this.props.productInfo[item.key]}</td>
                                        </tr>
                                    );
                                }
                            })
                        }


                    </table>
                </div>
                <div className="product-card__shared-button-container">
                    <Sizes sizes={this.props.productInfo.sizes}/>
                    <Favorite id={this.props.productInfo.id}/>
                    <div className="product-card__price-container-and-basket-button">
                        <Price price={this.props.productInfo.price} />
                        <button className="in-basket in-basket-click">В корзину</button>
                    </div>
                </div>
            </div>
        );
    }
}

ProductInfo.PropTypes = {
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    brand:PropTypes.string,
    price:PropTypes.string.isRequired
};
