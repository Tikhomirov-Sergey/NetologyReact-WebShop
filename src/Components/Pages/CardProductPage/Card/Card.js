import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';

import GetData from '../../../../Classes/GetData';

import ProductImages from './ProductImages';


export default class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product:null,
            error:false
        };

        this.setProduct = this.setProduct.bind(this);
    }

    componentDidMount() {

        GetData.getProductByid(this.props.id, this.setProduct)
    }

    setProduct(error, data) {

        if(!error) {
            this.setState({
                product:data
            });
        }
        else {
            this.setState({
                error
            });
        }
    }

    render() {

        if(this.state.error) {
            return (
                <section className="new-deals wave-bottom">
                    404
                </section>
            )
        }

        if(!this.state.product) {

            return (
                <section className="new-deals wave-bottom">
                    <BubbleLoader/>
                </section>
            )

        }

        return (
            <main className="product-card">
                <section className="product-card-content">
                    <h2 className="section-name">Ботинки женские</h2>
                    <section className="product-card-content__main-screen">

                        <ProductImages images={this.state.product.images} nameProduct={this.state.title} />

                        <div className="main-screen__product-info">
                            <div className="product-info-title"><h2>Ботинки женские</h2><div className="in-stock">В наличии</div></div>
                            <div className="product-features">
                                <table className="features-table">
                                    <tr>
                                        <td className="left-col">Артикул:</td>
                                        <td className="right-col">BD0677C</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Производитель:</td>
                                        <td className="right-col"><a href="#"><span className="producer">Fabi</span></a></td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Цвет:</td>
                                        <td className="right-col">чёрный</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Материалы:</td>
                                        <td className="right-col">натуральная кожа</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Сезон:</td>
                                        <td className="right-col">Осень-зима</td>
                                    </tr>
                                    <tr>
                                        <td className="left-col">Повод:</td>
                                        <td className="right-col">Любой</td>
                                    </tr>
                                </table>
                            </div>
                            <p className="size">Размер</p>
                            <ul className="sizes">
                                <li><a href="#">36</a></li>
                                <li className="active"><a href="#">37</a></li>
                                <li><a href="#">38</a></li>
                                <li><a href="#">38</a></li>
                                <li><a href="#">39</a></li>
                            </ul>
                            <div className="size-wrapper">
                                <a href="#"><span className="size-rule"/><p className="size-table">Таблица размеров</p></a>
                            </div>
                            <a href="#" className="in-favourites-wrapper">
                                <div className="favourite" href="#"/><p className="in-favourites">В избранное</p>
                            </a>
                            <div className="basket-item__quantity">
                                <div className="basket-item__quantity-change basket-item-list__quantity-change_minus">-</div>1
                                <div className="basket-item__quantity-change basket-item-list__quantity-change_plus">+</div>
                            </div>
                            <div className="price">26 120 ₽</div>
                            <button className="in-basket in-basket-click">В корзину</button>
                        </div>

                    </section>
                </section>
            </main>
        )
    }
}
