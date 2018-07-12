import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';
import $ from "jquery";

import GetData from '../../../../Classes/GetData';

export default class Card extends Component {

    arrow = false;

    visibleImages = [];

    constructor(props) {
        super(props);

        this.state = {
            firstId:null,
            error:false
        };
    }

    componentWillMount() {

        if(this.props.items.lendth !== 0) {

            this.setState({
                firstId:this.props.items[0]
            })
        }

        if(this.props.items.lendth > 3) {
            this.arrow = true;
        }

        
    }

    setBackgroundImage() {
        if(this.state.first && this.state.center && this.state.last) {
            this.$firstProduct.css({"background-image":this.props.items || "none"});
            this.$activeProduct.css({"background-image":this.state.center || "none"});
            this.$lastProduct.css({"background-image":this.state.last || "none"});
        } else {

            if(!this.state.error) {
                this.setState({
                    error:true
                })
            }
        }
    }
    
    render() {

        return (

            <section className="main-screen__favourite-product-slider">
                <div className="favourite-product-slider">
                    <div className="favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up" />
                    <div className="favourite-product-slider__item favourite-product-slider__item-1"
                        ref={ref => this.$visibleImages[0] = $(ref)} >
                        <a href="#" />
                    </div>
                    <div className="favourite-product-slider__item favourite-product-slider__item-2"
                        ref={ref => this.$visibleImages[1] = $(ref)} >
                        <a href="#" />
                    </div>
                    <div className="favourite-product-slider__item favourite-product-slider__item-3"
                        ref={ref => this.$visibleImages[2] = $(ref)} >
                        <a href="#" />
                    </div>
                    <div className="favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down" />
                </div>
            </section>
        )
    }
}
