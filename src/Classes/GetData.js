
import categories from '../data/categories.json';
import featured from '../data/featured.json';

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
}
