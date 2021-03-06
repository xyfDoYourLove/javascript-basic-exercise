export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }

  const rultArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] instanceof Array) {
      if (array[i].length !== 0) {
        for (let k = 0; k < array[i].length; k += 1) {
          rultArray[rultArray.length] = array[i][k];
        }
      }
    } else {
      rultArray[rultArray.length] = array[i];
    }
  }

  return rultArray;
}
