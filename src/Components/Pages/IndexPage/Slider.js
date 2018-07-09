import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from "jquery";

import slider from '../../../Classes/slider';

export default class Slider extends Component {

    componentDidMount() {

        let sliderPictures = $('.slider__pictures');

        let sliderImage = sliderPictures.find('.slider__image');
        let sliderCircle = sliderPictures.find('.slider__circles .slider__circle');
        let sliderArrow = sliderPictures.find('.slider__arrow');

        slider(sliderPictures, sliderImage, sliderCircle, '4000', '1000', sliderArrow);
    }

    render() {
        return (
            <section className="slider">
                <div className="wrapper">
                    <div className="slider__pictures">

                        {
                            this.props.images.map((item) => {
                                return (
                                    <a className="slider__image" href={item.href} key={item.id}>
                                        <img src={item.src} alt={item.alt}/>
                                    </a>
                                );
                            })
                        }

                        <div className="arrow slider__arrow slider__arrow_left"/>
                        <div className="arrow slider__arrow slider__arrow_right"/>
                        <div className="slider__circles">

                            {
                                this.props.images.map((item) => {
                                    return (
                                        <button className="slider__circle" value={item.id} key={item.id}/>
                                    );
                                })
                            }

                        </div>
                        <h2 className="h2">{this.props.title}</h2>
                    </div>
                </div>
            </section>
        );
    }
}

Slider.propTypes = {
    images:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        href:PropTypes.string.isRequired,
        src:PropTypes.string.isRequired,
        alt:PropTypes.string.isRequired
    })),
    title:PropTypes.string.isRequired
};