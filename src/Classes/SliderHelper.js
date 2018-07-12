
export default class SliderHelper {
     
    static calcItems(firstImageIdOld, isArrowDown, countItems, countImeges) {

        let newVisibleItems = [];

        let id = firstImageIdOld + (isArrowDown ? 1 : -1);

        for(let i = 0; i < countImeges; i++) {

            if(id < 0) {
                id = countItems - 1;
            }
    
            if(id > countItems - 1) {
                id = 0;
            }
    
            newVisibleItems.push(id++);
        }

        debugger;

        return newVisibleItems;
    }

}