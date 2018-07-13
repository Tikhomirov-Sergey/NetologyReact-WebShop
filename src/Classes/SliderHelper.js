
export default class SliderHelper {
     
    static calcItems(firstImageIdOld, isArrowNext, countItems, countImeges) {

        let newVisibleItems = [];

        let id = firstImageIdOld + (isArrowNext ? 1 : -1);

        for(let i = 0; i < countImeges; i++) {

            if(id < 0) {
                id = countItems - 1;
            }
    
            if(id > countItems - 1) {
                id = 0;
            }
    
            newVisibleItems.push(id++);
        }

        return newVisibleItems;
    }

}