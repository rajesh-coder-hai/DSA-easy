/**
 * Question: given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * same element can not be used twice.
 * Array: [2,1,5,3]; SUM = 4; answer: [1,3]
 * Array: [2,7,11,15]; SUM = 9; answer: [0,1]
 *
 */

function twoSum(params, target) {
  if (!params.length || !target) return "provide a valid array";
  const counter = {}; //stores the value and index
  for (i = 0; i < params.length; i++) {
    const complement = target - params[i];
    console.log("check complement", {
      complement,
      counter,
      i,
      item: params[i],
    });
    if (complement in counter) {
      return [i, counter[complement]];
    } else {
      counter[params[i]] = i;
    }
  }
}

const result = twoSum([2, 7, 11, 15], 9);
console.log("result", result);
