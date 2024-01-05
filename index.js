"use strict";
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const main = (number) => {
//   const result = [];
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(i.toString());
//     }
//   }
//   console.log(result);
//   return result;
// };

// main(15);

// const main = (str1, str2) => {
//   const result = [];
//   const minLength = Math.min(str1.length, str2.length);
//   const lengthDiff = Math.abs(str1.length - str2.length);
//   const longerStr = str1.length > str2.length ? str1 : str2;
//   const remainder = longerStr.substring(longerStr.length - lengthDiff);

//   for (let i = 0; i < minLength; i++) {
//     if (i < str1.length) {
//       result.push(str1[i]);
//     }

//     if (i < str2.length) {
//       result.push(str2[i]);
//     }
//   }
//   return result.join("") + remainder || "";
// };

// console.log(main("abcdussgsj", "defhu"));

// const main = (word) => {
//   let result = 0;

//   for (let i = 0; i < word.length; i += 3) {
//     if (word[i] !== "a") {
//       result++
//     }
//     if (word[i + 1] !== "b") {
//        result++;
//     }
//     if (word[i + 2] !== "c") {
//        result++;
//     }
//   }
//   console.log(result)
//   return result;
// };

// main("aaa");

// const crypto = require("crypto");
// const secret = "abcdefg";
// const hash = crypto
//   .createHmac("sha256", secret)
//   .update("Welcome to JavaTpoint")
//   .digest("hex");
// console.log(hash);

// function isPalindrome(s) {
//   const string = s
//     .toLowerCase()
//     .replace(/[^a-zA-Z0-9]/g, "");
//   let reversedString = ''
//   for (let i = string.length; i >= string.length, i--;){
//     reversedString += string[i]
//   }
//   return string === reversedString;
// }

function Sum(num) {
  const arr = [];
  const keys = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      for (let k = j + 1; k < num.length; k++) {
        if (num[i] + num[j] + num[k] === 0) {
          const subset = [num[i], num[j], num[k]];
          const key = JSON.stringify(subset.sort((a, b) => a - b));
          if (!keys.includes(key)) {
            arr.push(subset);
            keys.push(key);
          }
        }
      }
    }
  }
  console.log(arr);
  return arr;
}

function evaluate(emails) {
  let count = 0;
  const regExp = new RegExp("^([a-z.+]+)@([a-z]+).([a-z]{2,5})$");
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    email = email.replace(/(\.(?=[^@]*@))/g, "");
    if (regExp.test(email)) {
      console.log(email, "true");
      count++;
    }
  }
  return count;
}

function evaluateDate(email) {
  const months = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    may: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12",
  };
  const arr = email.split(" ");
  let currentdate = arr[0];
  currentdate = currentdate.replace(/[^0-9]/g, "");
  currentdate = currentdate.length < 2 ? `0${currentdate}` : currentdate;
  const month = months[arr[1].toLowerCase()];
  const year = arr[2];
  const response = `${year}-${month}-${currentdate}`;
  return response;
}

function countPairs(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (Math.abs(num1 - num2) === k) {
        count++;
      }
    }
  }
  return count;
}

function brackets(text) {
  const open = "(";
  const close = ")";
  let diff = 0;

  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char == open) {
      diff = diff + 1;
    } else if (char == close) {
      diff = diff - 1;
    }

    if (diff < 0) {
      diff = diff + 1;
    }
  }

  console.log(count);
}

function wordCountEngine(document) {
  // your code goes here
  let convertedString = document.toLowerCase();
  convertedString = convertedString.replace(/[^a-z  ]/g, "");
  let arr = convertedString.split(" ");
  arr = arr.filter((item) => item.match(/[^ ]/g));
  let output = [];
  let keys = [];

  for (let i = 0; i < arr.length; i++) {
    const currentWord = arr[i];
    const counter = arr.filter((item) => item === currentWord).length;
    if (!keys.includes(currentWord)) {
      output.push([currentWord, `${counter}`]);
      keys.push(currentWord);
    }
  }

  output.sort((item, nextItem) => nextItem[1] - item[1]);
  console.log(output);
  return output;
}

function nearestVowel(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  const positions = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (vowels.includes(char)) {
      positions[i] = 0;
      continue;
    } else {
      let rightDistance = Number.MAX_VALUE;
      let leftDistance = Number.MAX_VALUE;
      for (let j = i + 1; j < text.length; j++) {
        if (vowels.includes(text[j])) {
          rightDistance = j - i;
          break;
        }
      }
      for (let k = i - 1; k >= 0; k--) {
        if (vowels.includes(text[k])) {
          leftDistance = Math.abs(k - i);
          break;
        }
      }
      const closerDistance = Math.min(rightDistance, leftDistance);
      positions[i] = closerDistance;
    }
  }
  console.log(positions);
}

function isNumberPalindrome(x) {
  const normalString = String(x);
  let reversedString = "";

  for (let i = normalString.length - 1; i >= 0; i--) {
    const char = normalString[i];
    reversedString += char;
  }
  console.log(normalString === reversedString);
  return normalString === reversedString;
}

function romanToInteger(s) {
  let result = 0;
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const currentVal = numerals[s[i]];
    const nextVal = numerals[s[i + 1]];
    if (currentVal < nextVal) {
      result -= currentVal;
      continue;
    }
    result += currentVal;
  }
  return result;
}

function twoSum(nums, target) {
  const result = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    const pairIndex = nums.indexOf(remainder);
    if (pairIndex !== -1 && pairIndex !== i) {
      console.log([i, pairIndex]);
      return [i, pairIndex];
    }
  }
  console.log(result);
  return result;
}

function removeDuplicates(nums) {
  const passed = {};
  for (let i = 0; i < nums.length; i++) {
    if (passed[String(nums[i])] in passed) {
      nums[i] = "_";
    } else {
      passed[nums[i]] = nums[i];
    }
  }
  nums.sort((a, b) => {
    if (typeof a === "string") return 1;
    if (typeof b === "string") return -1;
    return a - b;
  });
  return Object.keys(passed).length;
}

function removeElement(nums, val) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val === nums[i]) {
      nums[i] = "_";
      continue;
    }
    result++;
  }
  nums.sort();
  return result;
}

const main = () => {
  // nearestVowel("babbb");
  // nearestVowel("abcdabcd");
  // nearestVowel("shopper");
  // isNumberPalindrome(10);
  // romanToInteger("MCMXCIV");
  // twoSum([2, 7, 11, 15], 9);
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
  // removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
};

main();
