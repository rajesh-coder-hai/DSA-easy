/**
 * Kadane's algorithm.
 * find the contiguous subarray withing a array of numbers which has the largest sum.
 * ex: [2,1, -3,4,-1,2,1,-5,4] => output 6. explanation  [4,-1,2,1] has the largest product 6
 *
 */

/**
 * NOTE: keep adding the numbers and check wether my global sum is decreasing or increasing.if a adding the next element decreases the previous sum. we ignore and
 */

function maxSumSubArray(numArr) {
  if (numArr.length === 0) return 0;

  let currSum = numArr[0];
  let globalMax = numArr[0];

  // Start loop from 1 since we initialized with the first element
  for (let i = 1; i < numArr.length; i++) {
    const prevSum = currSum;

    // THE FIX: Choose either the current element alone OR extend the previous sum
    currSum = Math.max(numArr[i], currSum + numArr[i]);
    globalMax = Math.max(globalMax, currSum);

    // Visualization
    console.group(`Iteration ${i}: Element ${numArr[i]}`);
    console.table({
      "Previous Subarray Sum": prevSum,
      "Current Element": numArr[i],
      "Decision (New currSum)": currSum,
      "Global Max Found So Far": globalMax,
    });
    console.groupEnd();
  }

  return globalMax;
}

const result = maxSumSubArray([2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(
  "%cFinal result: " + result,
  "color: green; font-weight: bold; font-size: 14px;"
);
