import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import $ from "jquery";

import GetData from '../../../Classes/GetData';
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


        GetData.getProductsById([81,22,81,22,81,22,81,22], this.setItems);

        /*if(this.props.items && this.props.items.length !== 0) {

            this.setState({
                items:this.props.items
            })
        }

        if(this.props.items && this.props.items.length > 3) {
            this.arrow = true;
        }*/
    }

    setItems(error, items) {

        if(!error && items && items.length !== 0) {
            this.setState({
                items
            });

            this.arrow = (this.props.countVisibleImage < this.state.items.length);

        }
        else {
            this.setState({
                items:null
            })
        }
    }

    getImages() {
        debugger;
        let images = [];

        if(this.state.items) {

            for(let i = 0; (i < this.props.countVisibleImage && i < this.state.items.length); i++) {

                images.push(
                    <div className="overlooked-slider__item"
                         style={{backgroundImage:`url(${this.state.items[i].images[0]})`}}>
                        <Link to={`/product/${this.state.items[i].id}`} />
                    </div>
                )
            }
        }

        return images;
    }

    onClickArrow(isNextArrow) {

        let newPositionItems = SliderHelper.calcItems(0, !isNextArrow, this.state.items.length, 3);

        let items = [];

        newPositionItems.forEach((item) => {
            items.push(this.state.items[item]);
        });

        this.setState({
            items
        })
    }

    render() {

        debugger;

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
    items:PropTypes.arrayOf(PropTypes.string).isRequired,
    clickOnImage:PropTypes.function,
    countVisibleImage:PropTypes.number.isRequired
};