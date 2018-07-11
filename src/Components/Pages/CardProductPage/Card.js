import React, { Component } from 'react';
import { BubbleLoader } from 'react-css-loaders';

import GetData from '../../../../Classes/GetData';

export default class Card extends Component {


    render() {

        return (
            <section className="new-deals wave-bottom">
                <BubbleLoader/>
            </section>
            )
    }
}
