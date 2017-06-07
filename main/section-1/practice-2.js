'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let newArr = []
    for (let strOfA of collectionA) {
        for (let arrOfB of collectionB) {
            for (let strOfB of arrOfB) {
                if (strOfA === strOfB) {
                    newArr.push(strOfA)
                    break
                }
            }
        }
    }
    return newArr;
}
