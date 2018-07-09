
import categories from '../data/categories.json';
import featured from '../data/featured.json';

export default class getData {

    static getCategories( callback) {
        setTimeout(() => {
            callback(false, categories);
        }, 1000);
    }

    static getFeatured(callback) {
        setTimeout(() => {
            callback(false, featured);
        }, 1000);
    }
}
