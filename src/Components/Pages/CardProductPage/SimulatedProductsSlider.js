import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import GetData from '../../../Classes/GetData';
import SliderHelper from '../../../Classes/SliderHelper';

export default class SimulatedProductsSlider extends Component {

    arrow = false;

    constructor(props) {
        super(props);

        this.state = {
            items:null
        };

        this.setItems = this.setItems.bind(this);

    }

    componentWillMount() {
        this.loadItems();
    }

    componentWillReceiveProps(newProps) {
        this.loadItems(newProps.activeId);
    }

    loadItems(activeId) {

        activeId = activeId || this.props.activeId;
        GetData.getSimilarProducts(activeId, this.setItems)
    }

    setItems(error, items) {

        if(!error && items && items.length !== 0) {

            this.arrow = this.props.countVisibleImage < items.length;

            this.setState({
                items
            });
        }
    }

    getImages() {

        let images = [];

        if(this.state.items) {

            for(let i = 0; (i < this.props.countVisibleImage && i < this.state.items.length); i++) {

                images.push(
                    <div className="similar-products-slider__item-list__item-card item" key={this.state.items[i].id}>
                        <div className="similar-products-slider__item">
                            <Link to={`/product/${this.state.items[i].id}`} >
                                <img src={this.state.items[i].images[0]} alt={this.state.items[i].title}/>
                            </Link>
                        </div>
                        <div className="similar-products-slider__item-desc">
                            <h4 className="similar-products-slider__item-name">{this.state.items[i].title}</h4>
                            <p className="similar-products-slider__item-producer">Производитель: <span className="producer">{this.state.items[i].brand}</span></p>
                            <p className="similar-products-slider__item-price">{this.state.items[i].price}</p>
                        </div>
                    </div>
                )
            }
        }

        return images;
    }

    onClickArrow(isNextArrow) {

        let newPositionItems = SliderHelper.calcItems(0, !isNextArrow, this.state.items.length, this.props.countVisibleImage);

        let items = [];

        newPositionItems.forEach((item) => {
            items.push(this.state.items[item]);
        });

        this.setState({
            items
        })
    }

    render() {

        if(!this.state.items || this.state.items.length === 0)
            return null;

        return (

            <section className="product-card__similar-products-slider">
                <h3>Похожие товары:</h3>
                <div className="similar-products-slider">
                    {this.arrow && <div className="similar-products-slider__arrow similar-products-slider__arrow_left arrow" onClick={() => {this.onClickArrow(false);}}/>}
                    {
                        this.getImages()
                    }
                    {this.arrow && <div className="similar-products-slider__arrow similar-products-slider__arrow_right arrow" onClick={() => {this.onClickArrow(false);}}/>}
                </div>
            </section>
        )
    }
}

SimulatedProductsSlider.PropTypes = {
    activeId:PropTypes.arrayOf(PropTypes.string).isRequired,
    countVisibleImage:PropTypes.number.isRequired
};