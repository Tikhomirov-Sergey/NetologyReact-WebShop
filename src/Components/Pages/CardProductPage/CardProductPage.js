import React, { Component } from 'react';

import Card from './Card/Card';
import OverlookedSlider from './OverlookedSlider';
import SimulatedProductsSlider from './SimulatedProductsSlider';

export default class CardProductPage extends Component {

    render() {
        return (
            <div>
                <Card id={this.props.match.params.id}/>
                <OverlookedSlider activeId={this.props.match.params.id} countVisibleImage={5} />
                <SimulatedProductsSlider activeId={this.props.match.params.id} countVisibleImage={3} />
            </div>
        )
    }
}
