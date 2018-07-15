import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';
import PropTypes from 'prop-types';
import $ from "jquery";

import GetData from '../../../../../Classes/GetData';
import SliderHelper from '../../../../../Classes/SliderHelper';

export default class ProductImageSlider extends Component {

    arrow = false;

    constructor(props) {
        super(props);

        this.state = {
            items:null
        };
    }

    componentWillMount() {
        this.setNewSlider();
    }

    componentWillReceiveProps() {
        this.setNewSlider();
    }

    setNewSlider() {

        if(this.props.items && this.props.items.length !== 0) {

            this.setState({
                items:this.props.items
            })
        }

        if(this.props.items && this.props.items.length > 3) {
            this.arrow = true;
        }
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

        let images = [];

        if(this.state.items) {

            for(let i = 0; (i < this.props.countVisibleImage && i < this.state.items.length); i++) {

                images.push(
                    <div className="favourite-product-slider__item"
                        style={{backgroundImage:`url(${this.state.items[i]})`}}
                        onClick={() => {this.props.clickOnImage(this.state.items[i]);}}
                        key={this.state.items[i]} />
                )
            }
        }

        return (

            <section className="main-screen__favourite-product-slider">
                <div className="favourite-product-slider">
                    {this.arrow && <div className="favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up" onClick={ () => { this.onClickArrow(false); } }/>}

                    {images}

                    {this.arrow && <div className="favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down" onClick={ () => { this.onClickArrow(true); } } />}
                </div>
            </section>
        )
    }
}

ProductImageSlider.PropTypes = {
    items:PropTypes.arrayOf(PropTypes.string).isRequired,
    clickOnImage:PropTypes.function,
    countVisibleImage:PropTypes.number.isRequired
};