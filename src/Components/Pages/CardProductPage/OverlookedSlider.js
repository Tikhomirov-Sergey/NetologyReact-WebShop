import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import GetData from '../../../Classes/GetData';
import LocalStorageHelper from '../../../Classes/LocalStorageHelper'
import SliderHelper from '../../../Classes/SliderHelper';

export default class OverlookedSlider extends Component {

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

        let itemsId = LocalStorageHelper.getOverlooked();

        activeId = activeId || this.props.activeId;

        if(itemsId && itemsId.length !== 0) {

            itemsId = itemsId.filter(item => parseInt(activeId) !== parseInt(item));
            GetData.getProductsById(itemsId, this.setItems);
        }

        this.arrow = itemsId && (this.props.countVisibleImage < itemsId.length);
    }

    setItems(error, items) {

        if(!error && items && items.length !== 0) {
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
                    <div className="overlooked-slider__item"
                         style={{backgroundImage:`url(${this.state.items[i].images[0]})`}}
                         key={this.state.items[i].id} >
                        <Link to={`/product/${this.state.items[i].id}`} />
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

            <section className="product-card__overlooked-slider">
                <h3>Вы смотрели:</h3>
                <div className="overlooked-slider">
                    {this.arrow && <div className="overlooked-slider__arrow overlooked-slider__arrow_left arrow" onClick={() => {this.onClickArrow(false);}}/>}
                    {
                        this.getImages()
                    }
                    {this.arrow && <div className="overlooked-slider__arrow overlooked-slider__arrow_right arrow" onClick={() => {this.onClickArrow(true);}}/>}
                </div>
            </section>
        )
    }
}

OverlookedSlider.PropTypes = {
    activeId:PropTypes.number.isRequired,
    countVisibleImage:PropTypes.number.isRequired
};