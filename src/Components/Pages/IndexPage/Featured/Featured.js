import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';

import ProductCard from './ProductCard';
import FeaturedMenu from './FeaturedMenu';
import FeaturedSlider from './FeaturedSlider';

import GetData from '../../../../Classes/GetData';

export default class Featured extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories:[],
            idActiveCategory:null,
            featured:null
        };

        this.setCategories = this.setCategories.bind(this);
        this.setFeatured = this.setFeatured.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        GetData.getCategories(this.setCategories);
    }

    setCategories(error, data) {
        if(!error && data.length !== 0) {

            const idActiveCategory = data[0].id;

            this.setState({
                categories:data,
                idActiveCategory:idActiveCategory
            });

            GetData.getFeatured(idActiveCategory, this.setFeatured);
        }
    }

    setFeatured(error, data) {
        if(!error) {debugger;
            this.setState({
                featured:data
            });
        }
    }

    changeCategory(idCategory) {debugger;
        this.setState({
            idActiveCategory:idCategory
        });

        GetData.getFeatured(idCategory, this.setFeatured);
    }

    render() {

        if(this.state.categories.length === 0 || (!this.state.featured || !this.state.featured.status || this.state.featured.status !== "ok")) {

            return (
                <section className="new-deals wave-bottom">
                    <BubbleLoader/>
                </section>
            )

        }

        return (
                <section className="new-deals wave-bottom">
                    <h2 className="h2">Новинки</h2>
                    <FeaturedMenu items={this.state.categories} idActiveCategory={this.state.idActiveCategory} onChangeCategory={this.changeCategory} />
                    <FeaturedSlider featured={this.state.featured}/>
                </section>
        );
    }
}
