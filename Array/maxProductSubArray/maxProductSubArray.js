/**
 * find the contiguous subarray withing a array of numbers which has the largest product.
 * ex: [2,3,-2,4] => output 6. explanation  [2,3] has the largest product 6
 *
 */

/**
 * NOTE: the twist in this question is due to -ve numbers and 0 handling.
 * a) thumb rule here is 0 acts as wall. whenever we encounter 0 we reset the product =1
 * b) this is very simple, calculate the product of each number in a loop and keep a tract whether multiplying the next number has decreased our result or not (basically keep a track of max) in each multiplication from left to right and right to left.
 */

function maxProductSubArray(numArr) {
  let max = -Infinity;
  let product = 1;
  for (let i = 0; i < numArr.length; i++) {
    product = product * numArr[i];
    max = Math.max(max, product);
    if (numArr[i] === 0) product = 1;
  }

  product = 1; //important to reset this else result will be in scientific numbers ;-D

  for (let i = numArr.length - 1; i >= 0; i--) {
    product = product * product;
    max = Math.max(max, product);
    if (numArr[i] === 0) product = 1;
  }
  return max;
}

const result = maxProductSubArray([2, 3, -2, 4]);
console.log("max product in the array is", result);

//you can put console.table inside the loop
// console.table({
//   Index: i,
//   "Current Value": numArr[i],
//   Product: product,
//   Max: max,
// });
//below creates a collapses section in the browser (not in terminal)
//  console.group(`Iteration ${i}`);
//  console.table({ product, max });
//  console.groupEnd();
