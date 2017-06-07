'use strict';

function decreaseCount(obj) {
    obj.count -= Math.floor(obj.count / 3)
}

function isStrInArry(arr, key) {
    let isIn = false
    for (let str of arr) {
        if (key === str) {
            isIn = true
            break
        }
    }
    return isIn;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let newCollectionA = collectionA.slice();  //copy a array from old array
    for (let objOfA of newCollectionA) {
        if (isStrInArry(objectB.value, objOfA.key)) {
            decreaseCount(objOfA)
        }
    }
    return newCollectionA
}