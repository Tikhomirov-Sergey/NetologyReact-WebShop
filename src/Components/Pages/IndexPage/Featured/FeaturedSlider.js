import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";

import ProductCard from './ProductCard';
import Favorite from '../../../Shared/Favorite';

export default class FeaturedSlider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first:null,
            active:null,
            last:null,
            error:false
        };

        this.onClickArrow = this.onClickArrow.bind(this);
    }

    componentWillMount() {

        if(this.props.featured.data.length < 3) {

            if(!this.state.error) {
                this.setState({
                    error:true
                })
            }
        }
        else {
            this.setState({
                first:this.props.featured.data[0],
                active:this.props.featured.data[1],
                last:this.props.featured.data[2]
            })
        }
    }

    componentDidMount() {
        this.setBackgroundImage();
    }

    componentWillUpdate() {
        this.setBackgroundImage();
    }

    onClickArrow(isLeftClick) {

        let newActiveId = this.state.activeId + (isLeftClick ? -1 : 1);
        let newFirstId;
        let newLastId;

        const lastItem = this.props.featured.data.length - 1;

        switch (newActiveId) {
            case (0): {
                newFirstId = lastItem;
                newLastId = newActiveId + 1;
                break;
            }
            case (-1): {
                newActiveId = lastItem;
                newFirstId = newActiveId - 1;
                newLastId = 0;
                break;
            }
            case (lastItem): {
                newFirstId = newActiveId - 1;
                newLastId = 0;
                break;
            }
            case (lastItem + 1): {
                newActiveId = 0;
                newFirstId = lastItem;
                newLastId = newActiveId + 1;
                break;
            }
            default:
                newFirstId = newActiveId - 1;
                newLastId = newLastId + 1;
        }

        this.setState({
            first:this.props.featured.data[newFirstId],
            active:this.props.featured.data[newActiveId],
            last:this.props.featured.data[newLastId],
            activeId:newActiveId
        });
    }

    setBackgroundImage() {
        if(this.state.first && this.state.active && this.state.last) {
            this.$firstProduct.css({"background-image":this.state.first.images[0] || "none"});
            this.$activeProduct.css({"background-image":this.state.active.images[0] || "none"});
            this.$lastProduct.css({"background-image":this.state.last.images[0] || "none"});
        } else {

            if(!this.state.error) {
                this.setState({
                    error:true
                })
            }
        }
    }

    render() {

        if(this.state.error || !this.state.active)
            return (<h2>Новинки отсутствуют</h2>);


        return (
            <div>
                <div className="new-deals__slider">
                    <div className="new-deals__arrow new-deals__arrow_left arrow" onClick={() => {this.onClickArrow(true)}}/>
                    <div className="new-deals__product new-deals__product_first"
                         ref={ref => this.$firstProduct = $(ref)} >
                        <a href="#"/>
                    </div>

                    <div className="new-deals__product new-deals__product_active"
                         ref={ref => this.$activeProduct = $(ref)} >
                        <a href="catalogue.html"/>
                        <Favorite id={this.state.active.id}/>
                    </div>
                    <div className="new-deals__product new-deals__product_last"
                         ref={ref => this.$lastProduct = $(ref)} >
                        <a href="#"/>
                    </div>
                    <div className="new-deals__arrow new-deals__arrow_right arrow" onClick={() => {this.onClickArrow(false)}}/>
                </div>
                <ProductCard title={this.state.active.title} brand={this.state.active.brand} price={this.state.active.price} />
            </div>
        );
    }
}

FeaturedSlider.PropTypes = {
    data:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        brand:PropTypes.string,
        price:PropTypes.string.isRequired
    }))
};