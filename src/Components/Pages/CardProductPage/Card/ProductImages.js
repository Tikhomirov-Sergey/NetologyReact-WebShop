import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductImageSlider from './ProductImageSlider';
import ProductMainImage from './ProductMainImage';

export default class ProductImages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mainImage:null,
            sliderImages:null
        }

        this.changeMainImage = this.changeMainImage.bind(this);
    }

    componentWillMount() {

        let mainImage;
        let sliderImages;

        if(this.props.images.length > 0) {

            mainImage = this.props.images[0];

            if(this.props.images.length > 1) {

                sliderImages = this.props.images;
                sliderImages.shift();
            }
        }

        this.setState({
            mainImage,
            sliderImages
        });
    }

    changeMainImage(newMainImage) {
        debugger;
        const indexNewMainImage = this.state.sliderImages.indexOf(newMainImage);
        const oldMainImage = this.state.mainImage;

        if(indexNewMainImage !== -1) {
            
            let newSliderImages = this.state.sliderImages;
            newSliderImages[indexNewMainImage] = oldMainImage;
            
            this.setState({
                mainImage:newMainImage,
                sliderImages:newSliderImages
            });
        }
    }

    render() {

        return (
            <div className="product-card-content__images">
                <ProductImageSlider items={this.state.sliderImages} clickOnImage={this.changeMainImage} countVisibleImage="3" />
                <ProductMainImage image={this.state.mainImage} nameProduct={this.props.nameProduct}/>
            </div>
        );
    }
}

ProductImages.PropTypes = {
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    nameProduct:PropTypes.string.isRequired
}
