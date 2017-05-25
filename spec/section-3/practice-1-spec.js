'use strict';
const createUpdatedCollection = require('../../main/section-3/practice-1');

describe('practice-3-1', () => {

  const collectionA = [
    {key: 'a', count: 2},
    {key: 'e', count: 2},
    {key: 'h', count: 2},
    {key: 't', count: 2},
    {key: 'f', count: 2},
    {key: 'c', count: 2},
    {key: 'g', count: 2},
    {key: 'b', count: 2},
    {key: 'd', count: 2}
  ];

  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count-1，输出减过之后的新A集合', () => {

    const result = createUpdatedCollection(collectionA, objectB);

    expect(result).toEqual([
      {key: 'a', count: 1},
      {key: 'e', count: 1},
      {key: 'h', count: 2},
      {key: 't', count: 2},
      {key: 'f', count: 1},
      {key: 'c', count: 2},
      {key: 'g', count: 2},
      {key: 'b', count: 2},
      {key: 'd', count: 1}
    ]);
  });
});
