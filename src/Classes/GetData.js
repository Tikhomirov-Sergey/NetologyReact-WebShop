
import axios from 'axios';

import categories from '../data/categories.json';
import featured from '../data/featured.json';
import products from '../data/products.json';

import shopConfig from '../Config/ShopConfig';

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
}
