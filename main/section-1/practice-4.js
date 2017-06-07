'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let newArr = []
    for (let objOfA of collectionA){
        for (let strOfB of objectB.value){
            if(objOfA.key === strOfB) {
                newArr.push(objOfA.key)
                break
            }
        }
    }
    return newArr;
}
