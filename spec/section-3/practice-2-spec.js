'use strict';
const createUpdatedCollection = require('../../main/section-3/practice-2');

describe('practice-3-2', () => {

  const collectionA = [
    {key: 'a', count: 3},
    {key: 'e', count: 7},
    {key: 'h', count: 11},
    {key: 't', count: 20},
    {key: 'f', count: 9},
    {key: 'c', count: 8},
    {key: 'g', count: 7},
    {key: 'b', count: 6},
    {key: 'd', count: 5}
  ];

  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新A集', () => {

    const result = createUpdatedCollection(collectionA, objectB);

    expect(result).toEqual([
      {key: 'a', count: 2},
      {key: 'e', count: 5},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 6},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 4}
    ]);
  });
});
