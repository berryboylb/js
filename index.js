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

function isPalindrome(s) {
  const string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < string.length; i++) {
    console.log(string[i], string[string.length - i - 1]);
    // if (string[i] !== string[string.length - i - 1]) {
    //   return false
    // }
  }
  return true;
}

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

function search(haystack, needle) {
  if (!haystack.includes(needle)) {
    return -1;
  }
  for (let i = 0; i < haystack.length; i++) {
    const str = haystack.substring(i, i + needle.length);
    if (str === needle) {
      return i;
    }
  }
}

function searchInsert(nums, target) {
  let output = 0;
  if (nums.includes(target)) {
    output = nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target) {
        output = i + 1;
      }
    }
  }
  return output;
}

function lengthOfLastWord(s) {
  const words = s.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== "") {
      return words[i].length;
    }
    continue;
  }
}

function plusOne(digits) {
  console.log(digits.reverse());
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  return [1, ...digits];
}

function addBinary(a, b) {
  const longest = a.length > b.length ? a.length : b.length;
  let res = "";
  let rem = "0";
  for (let i = longest - 1; i >= 0; i--) {
    const currA = a[i] || "0";
    const currB = b[i] || "0";
    if (
      currA + currB + rem === "100" ||
      currA + currB + rem === "010" ||
      currA + currB + rem === "001"
    ) {
      rem = "0";
      res = "1" + res;
    } else if (
      currA + currB + rem === "110" ||
      currA + currB + rem === "011" ||
      currA + currB + rem === "101"
    ) {
      rem = "1";
      res = "0" + res;
    } else if (currA + currB + rem === "111") {
      rem = "1";
      res = "1" + res;
    }
  }
  if (rem === "1") return console.log(rem + res);
  console.log(res);
}

function singleNumber(nums) {
  if (nums.length === 1) return nums[0];
  const passed = {}
  for (let i = 0; i < nums.length; i++) {
    if (passed[String(nums[i])] in passed) {
       delete passed[String(nums[i])]
     } else {
       passed[nums[i]] = nums[i];
     }
  }
  console.log(Object.values(passed)[0]);
}

const main = () => {
  // nearestVowel("babbb");
  // nearestVowel("abcdabcd");
  // nearestVowel("shopper");
  // isNumberPalindrome(10);
  // romanToInteger("MCMXCIV");
  // twoSum([2, 7, 11, 15], 9);
  // removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
  // removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
  // search("sadbutsad", "sad");
  // searchInsert([3, 6, 7, 8, 10], 5);
  // lengthOfLastWord("luffy is still joyboy");
  // plusOne([2, 9, 9]);
  // addBinary("11", "1");
  // isPalindrome("race a car");
  singleNumber([2, 2, 1]);
};

main();
