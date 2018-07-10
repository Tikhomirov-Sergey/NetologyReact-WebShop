import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocalStorageHelper from '../../Classes/LocalStorageHelper';

import favoriteImg from '../../img/new-deals__product_favorite.png';
import favoriteChosenImg from '../../img/new-deals__product_favorite_chosen.png';

export default class Favorite extends Component {

    constructor(props) {
        super(props);

        this.state = {
            favorite:this.checkFavoritee()
        }
    }

    checkFavoritee() {
        const favorites = this.props.favorites || LocalStorageHelper.getFavorite();

        if(favorites)
            return favorites.includes(this.props.id);

        return false;
    }

    toggleFavorite(isFavorite) {

        debugger;

        if(isFavorite) {
            LocalStorageHelper.removeFavorite(this.props.id);

            this.setState({
                favorite:false
            });
        }
        else {
            LocalStorageHelper.setFavorite(this.props.id);

            this.setState({
                favorite:true
            });
        }
    }

    render() {

        if(this.state.favorite)
        {
            return (
                <div className="new-deals__product_favorite chosen" onClick={() => {this.toggleFavorite(true)}} />
            );
        }
        else
        {
            return (
                <div className="new-deals__product_favorite" onClick={() => {this.toggleFavorite(false)}} />
            );
        }
    }
}

Favorite.propTypes = {
    id:PropTypes.number.isRequired,
    favorites:PropTypes.arrayOf(PropTypes.number)
};
