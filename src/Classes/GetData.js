
import axios from 'axios';

import featured from '../data/featured.json';

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

    static getProductsById(id, callback) {

        let waitAll = [];

        id.forEach((item) => {
            let link = `${shopConfig.apiHost}/products/${id}`;
            waitAll.push(axios.get(link));
        });

        Promise.all(waitAll)
            .then((response) => {

                let items = [];

                response.forEach((item) => {
                    items.push(item.data.data);
                });

                callback(false, items);
            })
            .catch((error) => {
                callback(error);
            })
    }
}
