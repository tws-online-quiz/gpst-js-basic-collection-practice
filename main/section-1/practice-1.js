'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let newArr = []
    for (let strOfA of collectionA){
        for (let strOfB of collectionB){
            if(strOfA === strOfB) {
                newArr.push(strOfA)
                break
            }
        }
    }
    return newArr;
}
