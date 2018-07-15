import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LocalStorageHelper from '../../../../../Classes/LocalStorageHelper';

export default class Favorite extends Component {

    constructor(props) {
        super(props);

        this.state = {
            favorite:this.checkFavoritee()
        }
    }

    componentWillUpdate(newProps) {

        if(newProps.id !== this.props.id) {
            this.setState({
                favorite:this.checkFavoritee()
            })
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
                <a className="in-favourites-wrapper" onClick={() => {this.toggleFavorite(true)}}>
                    <div className="favourite chosen"/><p className="in-favourites">Из избранного</p>
                </a>
            );
        }
        else
        {
            return (
                <a className="in-favourites-wrapper" onClick={() => {this.toggleFavorite(false)}}>
                    <div className="favourite"/><p className="in-favourites">В избранное</p>
                </a>
            );
        }
    }
}

Favorite.propTypes = {
    id:PropTypes.number.isRequired,
    favorites:PropTypes.arrayOf(PropTypes.number)
};
