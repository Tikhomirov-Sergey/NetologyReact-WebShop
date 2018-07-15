import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';

import Card from './Card/Card';
import OverlookedSlider from './OverlookedSlider';

import GetData from '../../../Classes/GetData';

export default class CardProductPage extends Component {

    render() {
        return (
            <div>
                <Card id={this.props.match.params.id}/>
                <OverlookedSlider activeId={this.props.match.params.id} countVisibleImage="5" />
            </div>
            )
    }
}
