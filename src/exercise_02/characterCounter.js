export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (string === undefined || string === null) {
    return 0;
  }

  const stringArray = string.split('');

  let count = 0;

  for (let i = 0; i < stringArray.length; i += 1) {
    if (prediction === undefined) {
      if (stringArray[i] !== '') {
        count += 1;
      }
      continue;
    }
    if (prediction(stringArray[i])) {
      count += 1;
    }
  }
  return count;
}
