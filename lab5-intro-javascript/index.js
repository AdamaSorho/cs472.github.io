"use strict";

//Problem 1
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

//Problem 2
function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }

  return max;
}

//Problem 3
function isVowel(c) {
  c = c.toLowerCase();

  let result = c === "a" || c === "e" || c === "i" || c === "o" || c === "u";

  return result;
}

//Problem 4
function sum(numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result;
}

const multiply = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let result = 1;

  for (let number of numbers) {
    result *= number;
  }

  return result;
};

//Problem 5
function reverse(s) {
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  return result;
}

//Problem 6
function findLongestWord(array) {
  let max = array.length;

  for (let s of array) {
    if (s.length > max) {
      max = s.length;
    }
  }

  return max;
}

//Problem 7
function filterLongWords(array, i) {
  return array.filter((w) => w.length > i);
}

//Problem 8
function computeSumOfSquares(numbers) {
  return numbers.map((e) => Math.pow(e, 2)).reduce((val, e) => val + e, 0);
}

//Problem 9
function printOddNumbersOnly(numbers) {
  numbers.filter((n) => n % 2 !== 0).forEach((odd) => console.log(odd));
}

//Problem 10
function computeSumOfSquaresOfEvensOnly(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((even) => Math.pow(even, 2))
    .reduce((val, n) => val + n, 0);
}

//Problem 11
function sum2(numbers) {
  return numbers.reduce((val, n) => val + n, 0);
}

function multiply2(numbers) {
  return numbers.reduce((val, n) => val * n, 1);
}

//Problem 12
function findSecondBiggest(numbers) {
  let max = numbers[0];
  let secondMax = numbers[1];

  for (let i = 1; i < numbers.length; ++i) {
    if (numbers[i] > secondMax) {
      if (numbers[i] > max) {
        secondMax = max;
        max = numbers[i];
      } else {
        secondMax = numbers[i];
      }
    }

    //Makes sure secondMax is always less than max
    if (max < secondMax) {
      let temp = max;
      max = secondMax;
      secondMax = temp;
    }
  }

  return secondMax;
}

//Problem 13
function printFibo(n, a, b) {
  let result = a;

  for (let i = 0; i < n; i++) {
    console.log(result);
    result = b;
    b += a;
    a = result;
  }
}

//Problem 14.1
function sum3(numbers) {
  return numbers.filter((n) => n > 20).reduce((val, n) => val + n, 0);
}

//Problem 14.2
const getNewArray = function (array) {
  return array.filter((s) => s.length >= 5 && s.includes("a"));
};

//test functions
console.log("max:", max(4, 3));
console.log("maxOfThree:", maxOfThree(3, 6, 3));
console.log("isVowel:", isVowel("u"));
const nums = [1, 2, 3, 4, 5, 35, 21];
console.log("sum:", sum(nums));
console.log("multiply:", multiply(nums));
console.log("reverse:", reverse("jag testar"));
const words = ["sorho", "djamantcha", "adama", "Culiculiculi"];
console.log("findLongestWord: ", findLongestWord(words));
console.log("filterLongWords:", filterLongWords(words, 5));
console.log("computeSumOfSquares: ", computeSumOfSquares(nums));
printOddNumbersOnly(nums);
console.log(
  "computeSumOfSquaresOfEvensOnly:",
  computeSumOfSquaresOfEvensOnly(nums)
);
console.log("sum2:", sum2(nums));
console.log("multiply2:", multiply2(nums));
console.log("findSecondBiggest:", findSecondBiggest(nums));
printFibo(10, 0, 1);
console.log("sum3:", sum3(nums));
console.log("getNewArray:", getNewArray(words));
