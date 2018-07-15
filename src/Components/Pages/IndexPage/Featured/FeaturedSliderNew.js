import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import Favorite from '../../../Shared/Favorite';

import SliderHelper from '../../../../Classes/SliderHelper';

export default class OverlookedSlider extends Component {

    arrow = false;

    constructor(props) {
        super(props);

        this.state = {
            items:null
        };
    }

    componentWillMount() {
        this.setActiveItems();
    }

    componentWillReceiveProps(newProps) {
        this.setActiveItems(newProps.featured && newProps.featured.data);
    }

    setActiveItems(featured) {
        debugger;
        featured = featured || (this.props.featured && this.props.featured.data);

        this.setState({
            items:featured
        });

        this.arrow = featured && (this.props.countVisibleImage < featured.length);
    }

    getInactiveItem(index, className) {

        if(this.state.items && this.state.items.length > index) {

            let item = this.state.items[index];

            return (
                <div className={`new-deals__product new-deals__product_inactive`}
                     style={{backgroundImage:`url(${item.images[0]})`}} >
                    <Link to={`/product/${item.id}`} />
                </div>
            );
        }

        return null;
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
            return (<h2>Новинки отсутствуют</h2>);


        return (

            <div>
                <div className="new-deals__slider">
                    <div className="new-deals__arrow new-deals__arrow_left arrow" onClick={() => {this.onClickArrow(true)}}/>
                    {
                        this.getInactiveItem(2)
                    }
                    <div className="new-deals__product new-deals__product_active"
                         style={{backgroundImage:`url(${this.state.items[0].images[0]})`}} >
                        <Link to={`/product/${this.state.items[0].id}`} />
                        <Favorite id={this.state.items[0].id}/>
                    </div>
                    {
                        this.getInactiveItem(1)
                    }
                    <div className="new-deals__arrow new-deals__arrow_right arrow" onClick={() => {this.onClickArrow(false)}}/>
                </div>
                <ProductCard title={this.state.items[0].title} brand={this.state.items[0].brand} price={this.state.items[0].price} />
            </div>
        )
    }
}

OverlookedSlider.PropTypes = {
    activeId:PropTypes.number.isRequired,
    countVisibleImage:PropTypes.number.isRequired
};