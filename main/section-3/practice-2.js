'use strict';

function decreaseCount(obj) {
    obj.count -= Math.floor(obj.count / 3)
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let newCollectionA = collectionA.slice();  //copy a array from old array
    for (let objOfA of newCollectionA) {
        for (let str of objectB.value) {
            if (objOfA.key === str) {
                decreaseCount(objOfA)
            }
        }
    }
    return newCollectionA
}