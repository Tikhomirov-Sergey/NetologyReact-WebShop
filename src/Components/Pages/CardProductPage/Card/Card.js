import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';

import GetData from '../../../../Classes/GetData';
import LocalStorageHelper from '../../../../Classes/LocalStorageHelper';


import ProductImages from './ProductImages/ProductImages';
import ProductInfo from './ProductInfo/ProductInfo';
import OverlookedSlider from '../OverlookedSlider';


export default class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product:null,
            error:false
        };

        this.setProduct = this.setProduct.bind(this);
    }

    componentDidMount() {
        GetData.getProductByid(this.props.id, this.setProduct);

        LocalStorageHelper.setOverlooked(this.props.id);
    }

    componentWillReceiveProps(newProps) {

        this.setState({
            product:false
        });

        GetData.getProductByid(newProps.id, this.setProduct);

        LocalStorageHelper.setOverlooked(newProps.id);
    }

    setProduct(error, data) {

        if(!error) {
            this.setState({
                product:data
            });
        }
        else {
            this.setState({
                error
            });
        }
    }

    render() {

        if(this.state.error) {
            return (
                <section className="new-deals wave-bottom">
                    404
                </section>
            )
        }

        if(!this.state.product) {

            return (
                <section className="new-deals wave-bottom">
                    <BubbleLoader/>
                </section>
            )

        }

        return (
            <main className="product-card">
                <section className="product-card-content">
                    <h2 className="section-name">Ботинки женские</h2>
                    <section className="product-card-content__main-screen">

                        <ProductImages images={this.state.product.images} nameProduct={this.state.title} />
                        <ProductInfo productInfo={this.state.product}/>

                    </section>
                </section>
            </main>
        )
    }
}
