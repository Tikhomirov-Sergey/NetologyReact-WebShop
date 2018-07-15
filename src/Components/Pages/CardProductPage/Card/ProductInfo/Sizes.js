import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocalStorageHelper from '../../../../../Classes/LocalStorageHelper';

export default class ProductInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedSize:null
        };

        this.setSize = this.setSize.bind(this);
    }

    componentWillMount() {

        let selectedSize = LocalStorageHelper.getSize();

        let selectedSizeInProps = [];

        if(selectedSize) {

            selectedSizeInProps = this.props.sizes.filter(item => item.size === selectedSize && item.available);
        }

        if(selectedSizeInProps.length === 0) {

            selectedSizeInProps = this.props.sizes.filter(item => item.available);
        }

        selectedSize = selectedSizeInProps[0].size;

        this.setState({selectedSize});

    }

    setSize(size) {
        debugger;
        LocalStorageHelper.setSize(size);

        this.setState({
            selectedSize:size
        });
    }

    render() {

        return (
            <div className="size-container">
                <div className="size-container__avalible-container">
                    <p className="size">Размер</p>
                    <ul className="sizes">

                        {
                            this.props.sizes.map((item) => {

                                if(item.available) {

                                    return (
                                        <li key={item.size} className={item.size === this.state.selectedSize ? "active" : ""}>
                                            <a onClick={() => {this.setSize(item.size)}}>{item.size}</a>
                                        </li>
                                    );

                                }
                            })
                        }

                    </ul>
                </div>
                <div className="size-wrapper">
                    <a href="#"><span className="size-rule"/><p className="size-table">Таблица размеров</p></a>
                </div>
            </div>
        );
    }
}

ProductInfo.PropTypes = {
    sizes:PropTypes.arrayOf(PropTypes.shape({
        size:PropTypes.number.isRequired,
        available:PropTypes.bool
    }))
};
