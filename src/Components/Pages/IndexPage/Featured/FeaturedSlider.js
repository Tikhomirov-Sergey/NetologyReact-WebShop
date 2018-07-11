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
        this.setActiveItems(false);
    }

    componentDidMount() {
        this.setBackgroundImage();
    }

    componentWillReceiveProps(newProps) {
        
        if(newProps.featured) {
            this.setActiveItems(newProps.featured);
        }
        else {
            if(!this.state.error) {
                this.setState({
                    error:true
                })
            }
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.setBackgroundImage();
    }

    setActiveItems(newItems) {

        newItems = newItems || this.props.featured;

        if(newItems.data.length < 3) {

            if(!this.state.error) {
                this.setState({
                    error:true
                })
            }
        }
        else {
            this.setState({
                first:newItems.data[0],
                active:newItems.data[1],
                last:newItems.data[2],
                activeId:1,
                error:false
            })
        }
    }

    onClickArrow(isLeftClick) {

        let newActiveId = this.state.activeId + (isLeftClick ? -1 : 1);
        let newFirstId;
        let newLastId;

        debugger;

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
                newLastId = newActiveId + 1;
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