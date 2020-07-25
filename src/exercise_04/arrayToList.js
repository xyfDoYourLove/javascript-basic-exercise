export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  class List {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  let list;
  let currElement;
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      list = new List(array[i], null);
      currElement = list;
    } else {
      currElement.next = new List(array[i], null);
      currElement = currElement.next;
    }
  }

  return list;
}
