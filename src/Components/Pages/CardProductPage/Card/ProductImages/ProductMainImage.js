import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';
import PropTypes from 'prop-types';

export default class ProductMainImages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            zoom:false
        };

        this.toggleZoom = this.toggleZoom.bind(this);
    }

    toggleZoom() {
        this.setState({
            zoom:!this.state.zoom
        });

    }

    render() {

        if(this.state.zoom) {

            return (

                <div className="main-screen__favourite-product-pic__zoom-active" onClick={this.toggleZoom}>
                    <div className="overlay"  />
                    <a><img src={this.props.image} alt={this.props.nameProduct} /></a>
                </div>
            )

        }

        return (

            <div className="main-screen__favourite-product-pic" onClick={this.toggleZoom} >
                <a><img src={this.props.image} alt={this.props.nameProduct}/></a>
                <a  className="main-screen__favourite-product-pic__zoom"/>
            </div>
        )
    }
}

ProductMainImages.PropTypes = {
    image:PropTypes.string.isRequired,
    nameProduct:PropTypes.string.isRequired
}