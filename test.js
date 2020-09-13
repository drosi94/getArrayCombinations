const expect = require('chai').expect;
const getArrayCombinations = require('./getArrayCombinations');

describe('Array Combinations', () => {
  it('should return blank array when no array is provided', () => {
    const combinations = getArrayCombinations();
    expect(combinations).to.deep.equal([]);
  });

  it('should return blank array when array is null/undefined', () => {
    const combinations = getArrayCombinations(undefined);
    expect(combinations).to.deep.equal([]);
  });

  it('should return the same array when the length of array is equals to the number of items of each combination', () => {
    const arr = [1, 2];
    const combinations = getArrayCombinations(arr);
    expect(combinations).to.deep.equal(arr);
  });

  it('should return [1,2] [1,3] [2,3]', () => {
    const arr = [1, 2, 3];
    const combinations = getArrayCombinations(arr);
    expect(combinations).to.deep.equal([[1, 2],[1,3],[2,3]]);
  });

  it('should return [1, 2, 3],[1, 2, 4],[1, 2, 5],[1, 3, 4],[1, 3, 5],[1, 4, 5],[2, 3, 4],[2, 3, 5],[3, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5];
    const combinations = getArrayCombinations(arr, 3);
    expect(combinations).to.deep.equal([
      [1, 2, 3],
      [1, 2, 4],
      [1, 2, 5],
      [1, 3, 4],
      [1, 3, 5],
      [1, 4, 5],
      [2, 3, 4],
      [2, 3, 5],
      [2, 4, 5],
      [3, 4, 5],
    ]);
  });
});
