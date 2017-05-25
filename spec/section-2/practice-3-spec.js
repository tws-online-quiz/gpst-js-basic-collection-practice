'use strict';
const countSameElements = require('../../main/section-2/practice-3');

describe('practice-2-3', () => {

  const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
    't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c:8',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];

  it('把A集合中相同的元素统计出数量', () => {

    const result = countSameElements(collection);

    expect(result).toEqual([
      {name: 'a', summary: 3},
      {name: 'e', summary: 7},
      {name: 'h', summary: 11},
      {name: 't', summary: 19},
      {name: 'f', summary: 9},
      {name: 'c', summary: 8},
      {name: 'g', summary: 7},
      {name: 'b', summary: 6},
      {name: 'd', summary: 5}
    ]);
  });
});
