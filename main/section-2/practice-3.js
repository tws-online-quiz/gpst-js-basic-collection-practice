'use strict';


function findObjInArr(result, str) {
    let newObj
    for (let obj of result) {
        if (obj.name === str) {
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
            obj.summary++;
        } else {
            result.push({name: str, summary: 1})
        }
    }
    return result
}

function handleSpecialElement(str, filterCollection) {
    let addNum
    let element = str[0]
    if (str.length === 3) {
        addNum = str[2]
    } else {
        let startIndex = str.indexOf('[');
        let endIndex = str.indexOf(']');
        addNum = parseInt(str.substring(startIndex + 1, endIndex))
    }
    for (let i = 0; i < parseInt(addNum); i++) {
        filterCollection.push(element)
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

module.exports = function countSameElements(collection) {
    let filterCollection = transformOriginCollection(collection);
    return countElements(filterCollection);
}
