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

    static setFavorite (id) {

        const key = `${shopConfig.nameShopInLocalStorage}_favorite`;

        let favorite = this.getFromLocalStorage(key);

        if(favorite) {

            if(!favorite.includes(parseInt(id))) {
                favorite.push(parseInt(id));
            }

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

    static getSize() {

        const key = `${shopConfig.nameShopInLocalStorage}_size`;

        let size = this.getFromLocalStorage(key);

        if(size) {
            size = size.size;
        }

        return size;
    }

    static setSize(size) {

        const key = `${shopConfig.nameShopInLocalStorage}_size`;
        localStorage.setItem(key, JSON.stringify({size}));
    }

    static setOverlooked(id) {

        const key = `${shopConfig.nameShopInLocalStorage}_overlooked`;

        let overlooked = this.getFromLocalStorage(key);

        if(overlooked) {

            const indexInOverlooked = overlooked.indexOf(parseInt(id));

            if(indexInOverlooked !== -1) {
                overlooked.splice(indexInOverlooked, 1);
            }

            overlooked.unshift(parseInt(id));

            if(overlooked.length > 10) {
                overlooked.pop();
            }

        } else {

            overlooked = [parseInt(id)];
        }

        localStorage.setItem(key, JSON.stringify(overlooked));

    }

    static getOverlooked() {
        const key = `${shopConfig.nameShopInLocalStorage}_overlooked`;
        return this.getFromLocalStorage(key);
    }

    static getFromLocalStorage(key) {

        try
        {
            let value = localStorage.getItem(key);

            if(value !== "") {

                value = JSON.parse(value);
            }

            return value;
        }
        catch(e)
        {
            return null;
        }
    }
}
