import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';

import GetData from '../../../../Classes/GetData';

export default class Card extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {


    }



    render() {

        return (
                    <section className="product-card-content__main-screen">
                        <section className="main-screen__favourite-product-slider">
                            <div className="favourite-product-slider">
                                <div className="favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up"/>
                                <div className="favourite-product-slider__item favourite-product-slider__item-1">
                                    <a href="#"/>
                                </div>
                                <div className="favourite-product-slider__item favourite-product-slider__item-2">
                                    <a href="#"/>
                                </div>
                                <div className="favourite-product-slider__item favourite-product-slider__item-3">
                                    <a href="#"/>
                                </div>
                                <div className="favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down"/>
                            </div>
                        </section>
                        <div className="main-screen__favourite-product-pic">
                            <a href="#"><img src="img/product-card-pics/product-card__favourite-product-pic.png" alt=""/></a>
                            <a href="#" className="main-screen__favourite-product-pic__zoom"/>
                        </div>
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

        )
    }
}
