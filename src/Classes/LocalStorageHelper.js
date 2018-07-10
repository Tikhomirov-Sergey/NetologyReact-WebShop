import shopConfig from '../Config/ShopConfig';

export default class LocalStorageHelper {

    static getFavorite() {

        const key = `${shopConfig.nameShopInLocalStorage}_favorite`;

        const favorite = this.getFromLocalStorage(key);

        if(typeof favorite === 'object') {

            return favorite;
        }

        return false;
    }

    static getFromLocalStorage(key) {

        let value = localStorage.getItem(key);

        if(value !== "") {

            value = JSON.parse(value);
        }

        return value;
    }

    static setFavorite (id) {

        const key = `${shopConfig.nameShopInLocalStorage}_favorite`;

        let favorite = this.getFromLocalStorage(key);

        if(favorite) {
            favorite.push(parseInt(id));
        } else {
            favorite = [parseInt(id)];
        }

        localStorage.setItem(key, JSON.stringify(favorite));
    }

    static removeFavorite(id) {

        const key = `${shopConfig.nameShopInLocalStorage}_favorite`;

        let favorite = this.getFromLocalStorage(key);

        if(favorite && favorite.length !== 0) {

            const position = favorite.indexOf(parseInt(id));

            favorite.splice(position, 1);

            localStorage.setItem(key, JSON.stringify(favorite));
        }
    }
}
