
import categories from '../data/categories.json';
import featured from '../data/featured.json';
import products from '../data/products.json';

export default class GetData {

    static getCategories( callback) {
        setTimeout(() => {
            callback(false, categories);
        }, 1000);
    }

    static getFeatured(idCategory, callback) {
        setTimeout(() => {

            let data = featured.data.filter(item => item['categoryId'] === parseInt(idCategory));
            callback(false, {data, status:"ok"});

        }, 1000);
    }

    static getProductByid(id, callback) {
        setTimeout(() => {
            
            let data = products.data.filter(item => item['id'] === parseInt(id));

            if(data && data.length === 0) {
                data = null;
            }

            callback(false, data);
            
        }, 1000);
    }
}
