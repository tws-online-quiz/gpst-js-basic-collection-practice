'use strict';


function findObjInArr(result, str) {
    let newObj
    for (let obj of result) {
        if (obj.key === str) {
            newObj = obj;
        }
    }
    return newObj
}

function generateObjElements(collection) {
    let result = []
    for (let str of collection) {
        let obj = findObjInArr(result, str)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: str, count: 1})
        }
    }
    return result
}

function decreaseCount(obj) {
    obj.count -= Math.floor(obj.count / 3)
}

function existSameObj(objectB, objOfA) {
    let isSame = false;
    for (let str of objectB.value) {
        if (objOfA.key === str) {
            isSame = true
            break
        }
    }
    return isSame;
}

function filterTheCollection(collectionA, objectB) {
    let newCollectionA = collectionA.slice();  //copy a array from old array
    for (let objOfA of newCollectionA) {
        if (existSameObj(objectB, objOfA)) {
            decreaseCount(objOfA)
        }
    }
    return newCollectionA
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let objCollection = generateObjElements(collectionA)
    return filterTheCollection(objCollection, objectB)
}
