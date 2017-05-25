'use strict';
const collectSameElements = require('../../main/section-1/practice-2');

describe('practice-1-2', () => {

  const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = [['a', 'd', 'e', 'f']];

  it('选出A集合中与B集合中子数组的元素相同的元素', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
