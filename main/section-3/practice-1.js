'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let newCollectionA = collectionA.slice();  //copy a array from old array
    for (let objOfA of newCollectionA) {
        for (let str of objectB.value) {
            if (objOfA.key === str) {
                objOfA.count--;
            }
        }
    }
    return newCollectionA
}
