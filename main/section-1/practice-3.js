'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let newArr = []
    for (let strOfA of collectionA) {
        for (let strOfB of objectB.value) {
            if (strOfA === strOfB) {
                newArr.push(strOfA)
                break
            }
        }
    }
    return newArr;
}
