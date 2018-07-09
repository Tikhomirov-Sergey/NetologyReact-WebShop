import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';

import ProductCard from './ProductCard';
import FeaturedMenu from './FeaturedMenu';
import FeaturedSlider from './FeaturedSlider';

import getData from '../../../../Classes/getData';

export default class Featured extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories:[],
            featured:null
        };

        this.setCategories = this.setCategories.bind(this);
        this.setFeatured = this.setFeatured.bind(this);
    }

    componentDidMount() {

        getData.getCategories(this.setCategories);
        getData.getFeatured(this.setFeatured);
    }

    setCategories(error, data) {
        if(!error) {
            this.setState({
                categories:data
            });
        }
    }

    setFeatured(error, data) {
        if(!error) {
            this.setState({
                featured:data
            });
        }
    }

    render() {

        if(this.state.categories.length === 0 || !this.state.featured) {

            return (
                <section className="new-deals wave-bottom">
                    <BubbleLoader/>
                </section>
            )

        }

        return (
                <section className="new-deals wave-bottom">
                    <h2 className="h2">Новинки</h2>
                    <FeaturedMenu items={this.state.categories}/>
                    <FeaturedSlider featured={this.state.featured}/>
                </section>
        );
    }
}
