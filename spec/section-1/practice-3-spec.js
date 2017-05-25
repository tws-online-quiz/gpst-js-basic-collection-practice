'use strict';
const collectSameElements = require('../../main/section-1/practice-3');

describe('practice-1-3', () => {

  const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = {value: ['a', 'd', 'e', 'f']};

  it('选出A集合中跟B对象中value属性中的元素相同的元素', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
