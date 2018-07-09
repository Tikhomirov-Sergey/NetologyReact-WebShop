import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from './Slider';
import Featured from './Featured/Featured';
import SalesAndNews from './SalesAndNews'
import AboutUs from './AboutUs';

import IndexPageConfig from '../../../Config/IndexPageConfig';

export default class IndexPage extends Component {

    render() {
        return (
            <div>
                <Slider {...IndexPageConfig.slider}/>
                <Featured/>
                <SalesAndNews/>
                <AboutUs/>
            </div>
        );
    }
}


