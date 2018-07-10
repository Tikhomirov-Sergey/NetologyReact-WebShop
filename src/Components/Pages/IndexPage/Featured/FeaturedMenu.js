import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeaturedMenu extends Component {

    changeCategory(event) {

        const id = event.currentTarget.value;

        if((typeof this.props.onChangeCategory === 'function') && id)
            this.props.onChangeCategory(id);

        event.preventDefault();
    }

    render() {

        let empty;

        if(this.props.items.length === 0) {
            empty = (
                    <li className="new-deals__menu-item new-deals__menu-item_active">
                        Загрузка категорий....
                    </li>
            );
        }

        return (
            <div className="new-deals__menu">
                <ul className="new-deals__menu-items">

                    {
                        this.props.items.map((item) => {
                            return (
                                <li className={`new-deals__menu-item ${(this.props.idActiveCategory === item.id) ? "new-deals__menu-item_active" : ""}`} onClick={this.changeCategory.bind(this)} value={item.id}>
                                    <a href="#">{item.title}</a>
                                </li>
                            );
                        })
                    }

                    {empty}

                </ul>
            </div>
        );
    }
}

FeaturedMenu.PropTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired
    })),
    onChangeCategory:PropTypes.func.isRequired,
    idActiveCategory:PropTypes.number.isRequired
};