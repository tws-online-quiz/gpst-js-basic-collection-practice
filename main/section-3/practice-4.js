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

function countElements(collection) {
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

function handleSpecialElement(str, filterCollection) {
    let strArr = str.split('-')
    for (let i = 0; i < parseInt(strArr[1]); i++) {
        filterCollection.push(strArr[0])
    }
}

function transformOriginCollection(collection) {
    let filterCollection = []
    for (let str of collection) {
        if (str.length > 1) {
            handleSpecialElement(str, filterCollection)
        } else {
            filterCollection.push(str)
        }
    }
    return filterCollection;
}

function countSameElements(collection) {
    let filterCollection = transformOriginCollection(collection);
    return countElements(filterCollection);
}

function decreaseCount(obj) {
    obj.count -= Math.floor(obj.count / 3)
}

function filterTheCollection(collectionA, objectB) {
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

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let objCollection = countSameElements(collectionA)
    return filterTheCollection(objCollection, objectB)

}
