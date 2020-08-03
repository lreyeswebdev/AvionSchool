// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  console.log(arr[0]);
}

function returnLast(arr) {
  // return the last item of the array
  console.log(arr[arr.length - 1]);
}

function getArrayLength(arr) {
  // return the length of the array
  console.log(arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push('item');
  console.log(arr);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift('item');
  console.log(arr);
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var sentence = "";
  for (var i = 0; i < words.length; i++) {
    sentence += ' ' + words[i];
  }
  return sentence;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
    return false;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum = sum + testScores[i];
  }
  return sum / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var largest = 0;
  for (i = 0; i <= largest; i++) {
    if (numbers[i] > largest) {
      var largest = numbers[i];
    }
    return largest;
  }
}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product *= arguments[i];
    if (argument.length === 0) {
      return 0;
    } else if (argument.length === 1) {
      return argument;
    } else {return product;}
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
