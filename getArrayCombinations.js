/**
 * Calculate recursively each combination
 * @param {Array} combinations, All the combinations found
 * @param {number} tempCombination, The currenct combination
 * @param {Array} arr, The starting array to find the combinations
 * @param {number} [n=2] number of items each combination must have
 * @param {number} tempCombinationIndex, The index of the current combination
 * @param {number} arrIndex, The index of the arr
 */
const findArrayCombinationsRecur = (
  combinations = [],
  tempCombination = [],
  arr,
  n,
  tempCombinationIndex,
  arrIndex
) => {
  // if tempCombination has the required number we have a new combination
  if (tempCombinationIndex === n) {
    combinations.push([...tempCombination]); // deep copy to new array using the spread operator
    return;
  }

  // if arr exceeds return
  if (arrIndex >= arr.length) {
    return;
  }

  tempCombination[tempCombinationIndex] = arr[arrIndex];
  findArrayCombinationsRecur(
    combinations,
    tempCombination,
    arr,
    n,
    tempCombinationIndex + 1,
    arrIndex + 1
  );
  findArrayCombinationsRecur(
    combinations,
    tempCombination,
    arr,
    n,
    tempCombinationIndex,
    arrIndex + 1
  );
};

/**
  * Calculates and returns array combinations.
  * @param {Array} arr
  * @param {number} [n=2] number of items each combination must
  have
  * @returns {Array}
  */
function getArrayCombinations(arr = [], n = 2) {
  const combinations = [];

  if (!arr || n < 2 || arr.length < n) {
    return combinations;
  }
  if (arr.length === n) {
    return arr;
  }

  const tempCombination = [];
  findArrayCombinationsRecur(combinations, tempCombination, arr, n, 0, 0);
  return combinations;
}

module.exports = getArrayCombinations;
