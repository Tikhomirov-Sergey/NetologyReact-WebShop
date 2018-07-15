
import axios from 'axios';

import featured from '../data/featured.json';

import shopConfig from '../Config/ShopConfig';
import productCardConfig from '../Config/ProductCardConfig';

export default class GetData {

    static getCategories(callback) {
        const link = `${shopConfig.apiHost}/categories`;

        axios
            .get(link)
            .then((response) => {
                callback(false, response.data.data)
            })
            .catch((error) => {
                callback(error);
            })
    }

    static getFeatured(idCategory, callback) {
        setTimeout(() => {

            let data = featured.data.filter(item => item['categoryId'] === parseInt(idCategory));
            callback(false, {data, status:"ok"});

        }, 1000);
    }

    static getProductByid(id, callback) {

        const link = `${shopConfig.apiHost}/products/${id}`;

        axios
            .get(link)
            .then((response) => {
                callback(false, response.data.data)
            })
            .catch((error) => {
                callback(error);
            })
    }

    static getProductsById(id, callback) {

        if(!id || id.length === 0)
            return ;

        let waitAll = [];

        id.forEach((item) => {
            let link = `${shopConfig.apiHost}/products/${item}`;
            waitAll.push(axios.get(link));
        });

        Promise.all(waitAll)
            .then((response) => {

                let items = [];

                response.forEach((item) => {
                    items.push(item.data.data);
                });

                if(callback)
                    callback(false, items);

                callback = null;
            })
            .catch((error) => {

                if(callback)
                    callback(error);

                callback = null;
            })
    }

    static getProductsWithFilter(filter, callback) {

        const link = `${shopConfig.apiHost}/products`;

        axios
            .get(link, {params: filter})
            .then(function (response) {
                callback(false, response);
            })
            .catch(function (error) {
                callback(error);
            });
    }

    static getSimilarProducts(id, callback) {

        let callbackForProductsWithFilter = (error, response) => {

            if(!error) {

                let data = response.data.data.filter(item => parseInt(item.id) !== parseInt(id));
                callback(false, data);

            } else {

                callback(error);
            }
        };

        let callbackForProductId = (error, data) => {

            if(!error) {

                let filter = {};

                productCardConfig.simulateProductCriteria.forEach((item) => {
                    if(data[item])
                        filter[item] = data[item];
                });

                this.getProductsWithFilter(filter, callbackForProductsWithFilter);

            } else {

                callback(error);
            }
        };

        this.getProductByid(id, callbackForProductId);
    }
}