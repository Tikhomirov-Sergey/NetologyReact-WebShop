import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Price extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coefficient:1
        };

        this.changeCoefficient = this.changeCoefficient.bind(this);
    }

    changeCoefficient(isIncrement) {
        let coefficient = this.state.coefficient + (isIncrement ? 1 : -1);

        if(coefficient >= 1) {
            this.setState({coefficient});
        }
    }

    render() {

        return (
            <div>
                <div className="basket-item__quantity">
                    <div className="basket-item__quantity-change basket-item-list__quantity-change_minus" onClick={() => {this.changeCoefficient(false)}}>-</div>
                    {this.state.coefficient}
                    <div className="basket-item__quantity-change basket-item-list__quantity-change_plus" onClick={() => {this.changeCoefficient(true)}}>+</div>
                </div>
                <div className="price">{this.props.price * this.state.coefficient} ₽</div>
            </div>
        );
    }
}

Price.PropTypes = {
    price:PropTypes.number.isRequired
};
