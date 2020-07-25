export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (start === end) {
    return [];
  }
  if (start > end) {
    const result = Array.of(start - end);
    for (let k = end + 1; k <= start; k += 1) {
      result[start - k] = k;
    }
    return result;
  }

  const result = Array.of(end - start);
  if (end > start) {
    for (let i = start; i < end; i += 1) {
      result[i - start] = i;
    }
  }
  return result;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let sumNum = 0;
  if (numbers === undefined) {
    return 0;
  }
  if (numbers.length === 1) {
    return numbers[0];
  }
  for (let i = 0; i < numbers.length; i += 1) {
    sumNum += numbers[i];
  }
  return sumNum;
}
