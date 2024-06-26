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
  const passed = {};
  for (let i = 0; i < nums.length; i++) {
    if (passed[String(nums[i])] in passed) {
      delete passed[String(nums[i])];
    } else {
      passed[nums[i]] = nums[i];
    }
  }
  console.log(Object.values(passed)[0]);
}

function buysell(prices) {
  let profit = 0;
  let smallest = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < smallest) {
      smallest = prices[i];
    } else if (prices[i] - smallest > profit) {
      profit = prices[i] - smallest;
    }
  }
  return profit;
  // console.log(profit);
}

function addSquare(num) {
  let result = 0;
  for (let i = 0; i < String(num).length; i++) {
    result += Number(String(num)[i]) ** 2;
  }
  console.log({ result });
  return result;
}

function isHappy(n) {
  let seen = new Set();
  let result = n;
  while (result !== 1 && !seen.has(result)) {
    seen.add(result);
    result = addSquare(result);
  }
  return result == 1;
}

function containsDuplicate(nums) {
  let items = new Set();

  for (const num of nums) {
    if (items.has(num)) {
      console.log(true, items);
      return true;
    } else {
      items.add(num);
    }
  }
  console.log(false, items);
  return false;
}

function containsNearbyDuplicate(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const target = k - nums[i];
    if (map.has(target) && Math.abs(i - map.get(target)) <= k) {
      console.log(true);
      return true;
    }
    map.set(nums[i], i);
  }
  console.log(false);
  return false;
}

var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

function isPowerOfNum(num, base) {
  return Number.isInteger(Math.log(num) / Math.log(base) || Math.log(2));
}
// isPowerOfNum(8, 2); true
// isPowerOfNum(16, 4); true
// isPowerOfNum(9); false

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < t.length; i++) {
    if (!s.includes(t[i])) {
      return false;
    }
    s = s.replace(t[i], "");
  }
  return s.length === 0;
}

function addDigits(num) {
  if (String(num).length < 2) {
    return num;
  }
  while (String(num).length > 1) {
    let tempNumber = 0;
    for (let i = 0; i < String(num).length; i++) {
      tempNumber += Number(String(num)[i]);
    }
    num = tempNumber;
  }
  return num;
}

function missingNumber(nums) {
  let items = new Set();
  for (const num of nums) {
    items.add(num);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!items.has(i)) {
      console.log(i);
      return i;
    }
  }
}
function moveZeroes(nums) {
  // let i = 0;

  // for (let j = i+1; j < nums.length; j++) {
  //   if (nums[i] !== 0) {
  //     i++
  //     continue
  //   } else {
  //     if (nums[j] !== 0) {
  //       [nums[i], nums[j]] = [nums[j], nums[i]]
  //       i++
  //     }
  //     continue
  //   }
  // }
  // console.log(nums);
  // return nums;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && nums[i + 1] !== undefined) {
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    } else if (nums[i - 1] === 0) {
      [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
    }
  }

  console.log(nums);
}

function nbiggest(nums, k) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.length > k) {
      const smallest = Math.min(...arr);
      const index = nums.indexOf(smallest);
      arr.splice(index, 1);
    }

    arr.push(nums[i]);
  }
  const smallest = Math.min(...arr);
  console.log(smallest, arr);
}

function findErrorNums(nums) {
  let set = new Set();
  let replica = 0;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      replica = nums[i];
    }
    set.add(nums[i]);
  }

  for (let j = 1; j <= nums.length; j++) {
    if (!set.has(j)) {
      return [replica, j];
    }
  }
}

function reverse(x) {
  let str = String(x);
  let rvrstr = "";
  let isNegative = false;
  let start = 0;
  let maxInt32 = BigInt(Math.pow(2, 31) - 1);
  if (str[0] === "-") {
    isNegative = true;
    start = 1;
  }
  for (let i = start; i < str.length; i++) {
    rvrstr = str[i] + rvrstr;
  }
  if (Number(rvrstr) > maxInt32) return 0;
  return isNegative ? Number("-" + rvrstr) : Number(rvrstr);
}

function stringToNum(str) {
  str = str.replace(/[^0-9]/g, "");
  let num = 0;
  let val = 0;
  let negative = false;

  for (let i = 0; i < str.length; i++) {
    const placeValue = 10 ** val;
    if (str[i] === "-" && i === 0) {
      continue;
    }
    console.log(str.charCodeAt(i) - "0".charCodeAt(0));

    val++;
  }
}

function intToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      result += numeral.symbol;
      num -= numeral.value;
    }
  }

  return result;
}

var customSortString = function (order, s) {
  const item = new Map();
  for (let i = 0; i < order.length; i++) item.set(order[i], order.length - i);

  return Array.from(s)
    .sort((a, b) => {
      const valueA = item.has(a) ? item.get(a) : 0;
      const valueB = item.has(b) ? item.get(b) : 0;
      return valueB - valueA;
    })
    .join("");
};
function findDisappearedNumbers(nums) {
  const numSet = new Set(nums);
  const res = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      res.push(i);
    }
  }
  console.log(res);
}
function findComplement(num) {
  const numInBaseTwo = num.toString(2);
  let compliment = "";
  for (const num of numInBaseTwo) {
    if (num === "1") {
      compliment += "0";
    } else {
      compliment += "1";
    }
  }
  return parseInt(compliment, 2);
}

function arrangeCoins(n) {
  if (n === 1) return 1;
  let counter = n;
  for (let i = 1; i <= n; i++) {
    if (counter < i) {
      return i - 1;
    }
    counter -= i;
  }
} //91ms

function arrangeCoinRecursion(n) {
  return arrange(n, 1);
} //151ms
function arrange(n, k) {
  if (n < k) return console.log(k - 1);
  return arrange(n - k, k + 1);
}

function hammingDistance(x, y) {
  const bitX = x.toString(2).padStart(32, "0");
  const bitY = y.toString(2).padStart(32, "0");
  let distance = 0;
  for (let i = 0; i < bitX.length; i++) {
    if (bitX[i] !== bitY[i]) {
      distance++;
    }
  }
  return distance;
} //59ms

function thirdMax(nums) {
  let set = new Set(nums);
  while (set.size > 3) {
    set.delete(Math.min(...set));
  }
  return set.size < 3 ? Math.max(...set) : Math.min(...set);
}

function kMax(nums, k) {
  let set = new Set(nums);
  while (set.size > k) {
    set.delete(Math.min(...set));
  }
  return set.size < k ? Math.max(...set) : Math.min(...set);
}

function addStrings(num1, num2) {
  const max = Math.max(num1.length, num2.length);
  num1 = num1.padStart(max, "0");
  num2 = num2.padStart(max, "0");
  let result = "";
  let carry = 0;
  for (let i = max - 1; i >= 0; i--) {
    const init = parseInt(num1[i]);
    const sec = parseInt(num2[i]);
    let sum = init + sec + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    result = String(sum) + result;
  }
  return carry > 0 ? String(carry) + result : result;
}

function countSegments(s) {
  return s.split(" ").filter((item) => item).length;
}

function findContentChildrenn(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let mostContent = 0;
  let j = 0;
  for (let i = 0; i < g.length; i++) {
    // Skip to the next cookie if the current one is too small
    while (j < s.length && s[j] < g[i]) {
      j++;
    }
    // If a suitable cookie was found, increment the content children counter
    if (j < s.length) {
      mostContent++;
      j++; // Move to the next cookie
    }
  }
  return mostContent;
}

function findMaxConsecutiveOnes(nums) {
  let maxNums = 0;
  let temp = 0;
  for (const num of nums) {
    temp = temp * num + num;
    if (temp > maxNums) maxNums = temp;
  }
  return maxNums;
}

function squareRoot(num) {
  console.log(Math.exp(Math.log(num) / 2));
  return Math.floor(Math.exp(Math.log(num) / 2));
}

function licenseKeyFormatting(s, k) {
  s = s.toUpperCase().replace(/[^a-zA-Z0-9]/g, "");
  let res = "";
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    res = s[i] + res;
    count++;

    if (count === k && i !== 0) {
      res = "-" + res;
      count = 0;
    }
  }

  return res;
}

function convertToBase7(num) {
  num = String(num);
  let negative = false;
  if (num[0] === "-") {
    num = num.substring(1);
    negative = true;
  }
  num = Number(num);
  console.log(negative ? "-" + num.toString(7) : num.toString(7));
}

function reverseWords(s) {
  const arr = s.split(" ");
  let res = "";
  for (let j = 0; j < arr.length; j++) {
    for (let i = arr[j].length - 1; i >= 0; i--) {
      const char = arr[j][i];
      res += char;
    }
    if (j < arr.length - 1) {
      res += " ";
    }
  }

  console.log({ arr, res });
  return res;
}

function climbStairs(n) {
  const ways = new Map([
    [0, 1],
    [1, 1],
  ]);
  for (let i = 2; i <= n; i++) {
    ways.set(i, ways.get(i - 1) + ways.get(i - 2));
  }
  return ways.get(n);
}

var rotateString = function (s, goal) {
  let str = s;
  for (let i = 0; i < s.length; i++) {
    const last = str[str.length - 1];
    str = last + str.substring(0, str.length - 1);
    if (str === goal) {
      console.log({ str, ans: true });
      return true;
    }
  }

  console.log({ str, ans: false });
  return false;
};

function reversed(s) {
  let reverse = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i];
  }
  return reverse;
}

var validPalindrome = function (s) {
  for (let i = 0; i <= s.length; i++) {
    let current = s.substring(0, i) + s.substring(i + 1);
    let reverse = reversed(current);
    if (current === reverse) {
      console.log({ res: true });
      return true;
    }
  }
  console.log({ res: false });
  return false;
};

var toLowerCase = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toLowerCase();
  }
  return s.toLowerCase();
};

var findShortestSubArray = function (nums) {
  // Maps to keep track of the frequency, first occurrence, and last occurrence of elements.
  let count = {};
  let firstOccurrence = {};
  let lastOccurrence = {};

  // Degree of the array, which is the maximum frequency of any element.
  let degree = 0;

  // Iterate through the array to populate the maps.
  for (let i = 0; i < nums.length; ++i) {
    let value = nums[i];

    // Increase the count for this value and update the degree.
    degree = Math.max(degree, (count[value] = (count[value] || 0) + 1));

    // Record the first occurrence of this value.
    if (!firstOccurrence.hasOwnProperty(value)) {
      firstOccurrence[value] = i;
    }

    // Update the last occurrence of this value.
    lastOccurrence[value] = i;
  }

  // Initialize the answer as a large number.
  let minLength = Infinity;

  // Loop through the array again to find the shortest subarray with the same degree.
  for (let value in count) {
    if (count[value] === degree) {
      // Calculate the length of the subarray for this value.
      let length = lastOccurrence[value] - firstOccurrence[value] + 1;

      // Update the answer if this length is smaller.
      minLength = Math.min(minLength, length);
    }
  }

  // Return the minimum length found.
  return minLength;
};

var Stub = function (nums) {
  let counts = {};
  let diff = {};

  for (let i = 0; i < nums.length; i++) {
    if (!counts.hasOwnProperty(nums[i])) {
      counts[nums[i]] = 1;
    } else {
      counts[nums[i]] += 1;
    }
    let difference = nums.lastIndexOf(nums[i]) - nums.indexOf(nums[i]) + 1;
    diff[nums[i]] = difference;
  }

  console.log(counts);
};

var majorityElement = function (nums) {
  let max = 0;
  let mostOccurrence = 0;
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
    if (map.get(num) > mostOccurrence) {
      mostOccurrence = map.get(num);
      max = num;
    }
  }

  console.log({ map, max });
  return max;
};

var constructRectangle = function (area) {
  let max = Number.POSITIVE_INFINITY;
  let res = [0, 0];

  for (let width = 1; width <= Math.sqrt(area); width++) {
    if (area % width === 0) {
      const length = area / width;
      const diff = Math.abs(length - width);
      if (width <= length && diff < max) {
        max = diff;
        res = [length, width];
      }
    }
  }

  console.log({ res, are: Math.sqrt(area) });
  return res;
};

// function* count(){
//   yield 1;
//   yield 2;
//   return 3;
// }

// for (const value of count()) {
//   console.log(value);
// }

function countOccurrences(paragraph, banned) {
  const words = paragraph
    .toLowerCase()
    .replace(/[^a-z]/g, " ")
    .split(" ");
  let count = 0;
  const wordCount = new Map();
  let ans = "";
  for (const word of words) {
    if (!banned.includes(word) && word !== "") {
      const curr = (wordCount.get(word) || 0) + 1;
      wordCount.set(word, curr);
      if (curr > count) {
        count = curr;
        ans = word;
      }
    }
  }
  console.log({ ans, words });
  return ans;
}

var uniquePaths = function (m, n) {
  // Create a 2D array to store the number of paths
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

var generateParenthesisMine = function (n) {
  const result = [];
  let opens = 0;
  let closes = 0;
  let str = "";

  return result;
};

var generateParenthesis = function (n) {
  const result = [];

  // Helper function to generate parentheses recursively
  function backtrack(current, open, close) {
    // Base case: If the current string length is equal to 2 * n, add it to the result
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // Recursive case: Add an opening parenthesis if there are still open parentheses available
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // Recursive case: Add a closing parenthesis if there are still open parentheses that haven't been closed yet
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  // Start the recursive process with an empty string and counts of open and close parentheses
  backtrack("", 0, 0);

  console.log({ result, length: result.length });

  return result;
};

var removeZeroSumSublists = function (head) {
  // Create a dummy node to handle cases where the original head is removed
  let dummy = new ListNode(0);
  dummy.next = head;

  // Initialize a hash map to store running sums and their corresponding nodes
  let map = new Map();
  let sum = 0;
  let current = dummy;

  while (current != null) {
    sum += current.val;

    if (map.has(sum)) {
      // If the same running sum is found again, remove the nodes between them
      let prev = map.get(sum).next;
      let tempSum = sum + prev.val;
      while (prev !== current) {
        tempSum += prev.next.val;
        map.delete(tempSum);
        prev = prev.next;
      }
      map.get(sum).next = current.next;
    } else {
      // Store the current running sum and its corresponding node
      map.set(sum, current);
    }

    // Move to the next node
    current = current.next;
  }

  return dummy.next;
};

var removeDuplicates2 = function (nums) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = map.get(nums[i]);
    if (curr === 2) {
      nums[i] = "_";
    } else {
      map.set(nums[i], (curr || 0) + 1);
      count++;
    }
  }
  nums.sort((a, b) => {
    if (typeof a === "string") return 1;
    if (typeof b === "string") return -1;
    return a - b;
  });

  console.log({ count, nums, wordCount });

  return count;
};

var checkIfPangram = function (sentence) {
  if (sentence.length < 26) {
    return false;
  }

  let charSet = new Set();
  for (const char of sentence) {
    if (char >= "a" && char <= "z") {
      charSet.add(char);
    }
  }

  return charSet.size === 26;
};

function reverseArr(nums) {
  const result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    result.push(nums[i]);
  }
  console.log({ result });
  return result;
}

function reverseSwapArr(nums) {
  for (let i = 0; i < nums.length / 2; i++) {
    let temp = nums[i];
    nums[i] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = temp;
  }
  console.log({ nums });
  return nums;
}

function kth(arr, k) {
  arr.sort((a, b) => a - b);
  let kthbiggest = arr[arr.length - k];
  console.log({ arr, kthbiggest });
}

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (const stone of stones) {
    if (jewels.includes(stone)) {
      count++;
    }
  }
  console.log({ count });
  return count;
};

function test() {
  let num = 4902301;
  console.log(`$${num.toLocaleString()}`);
}

function closest(ts) {
  let min = Number.POSITIVE_INFINITY;
  for (const temp of ts) {
    if (Math.abs(temp) < Math.min(min)) {
      min = temp;
    }
    console.log({ temp });
  }
  console.log({ min });
  return min;
}

function numberOfEmployeesWhoMetTarget(hours, target) {
  let count = 0;
  for (const hour of hours) if (hour >= target) count++;
  return count;
}

function numberOfEmployeesWhoMetTarget2(hours, target) {
  return hours.reduce((acc, curr) => (curr >= target ? ++acc : acc), 0);
}

function generateApiKey(length = 20) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/";
  let apiKey = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    apiKey += charset[randomIndex];
  }
  console.log({ apiKey });

  return apiKey;
}

const genAPIKey = () => {
  //create a base-36 string that contains 30 chars in a-z,0-9
  const key = [...Array(20)]
    .map((e) => {
      const num = Math.random() * 36;
      console.log({ num });
      return Math.floor(num).toString(36);
    })
    .join("");
  console.log({ key, res: Math.random() * 36 });
};

function test() {
  const num = 29;
  console.log(`es:${num.toString(36)}`);
}
function islandPerimeter(grid) {
  let perimeter = 0;
  const land = 1;

  // Iterate over all cells in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // If the current cell is part of the island
      if (grid[i][j] === land) {
        // Increment the perimeter by 4
        perimeter += 4;

        // Check each neighboring cell
        if (i > 0 && grid[i - 1][j] === land) {
          // If the cell above is part of the island, decrement the perimeter by 1
          perimeter -= 1;
        }
        if (j > 0 && grid[i][j - 1] === land) {
          // If the cell to the left is part of the island, decrement the perimeter by 1
          perimeter -= 1;
        }
        if (i < grid.length - 1 && grid[i + 1][j] === land) {
          // If the cell below is part of the island, decrement the perimeter by 1
          perimeter -= 1;
        }
        if (j < grid[i].length - 1 && grid[i][j + 1] === land) {
          // If the cell to the right is part of the island, decrement the perimeter by 1
          perimeter -= 1;
        }
      }
    }
  }

  return perimeter;
}

function numIslandsdfs(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;

  // Helper function for DFS traversal
  function dfs(row, col) {
    if (
      row < 0 ||
      row >= numRows ||
      col < 0 ||
      col >= numCols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // Mark the current cell as visited
    grid[row][col] = "0";

    // Explore adjacent cells
    dfs(row + 1, col); // Down
    dfs(row - 1, col); // Up
    dfs(row, col + 1); // Right
    dfs(row, col - 1); // Left
  }

  // Main DFS traversal loop
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j); // Explore the island and mark all its cells as visited
      }
    }
  }

  return count;
}

function numIslandsbfs(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;

  // Helper function for BFS traversal
  function bfs(row, col) {
    const queue = [];
    queue.push([row, col]);

    while (queue.length > 0) {
      const [r, c] = queue.shift();

      if (
        r < 0 ||
        r >= numRows ||
        c < 0 ||
        c >= numCols ||
        grid[r][c] === "0"
      ) {
        continue;
      }

      grid[r][c] = "0"; // Mark the current cell as visited

      // Explore adjacent cells
      queue.push([r + 1, c]); // Down
      queue.push([r - 1, c]); // Up
      queue.push([r, c + 1]); // Right
      queue.push([r, c - 1]); // Left
    }
  }

  // Main BFS traversal loop
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === "1") {
        count++;
        bfs(i, j); // Explore the island and mark all its cells as visited
      }
    }
  }

  return count;
}

function numIslands(grid) {
  let count = 0;
  const land = "1";

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === land) {
        count++;
        if (j > 0 && grid[i][j - 1] === land) {
          count--;
        }

        if (i > 0 && grid[i - 1][j] === land) {
          count--;
        }
      }
    }
  }

  console.log({ count });
  return count;
}

function specialCharacters(word) {
  let count = 0;
  const letters = new Set([...word]);
  const checked = new Set();
  for (const letter of letters) {
    if (!checked.has(letter)) {
      const lower = letter.toLowerCase();
      const upper = letter.toUpperCase();
      if (letters.has(lower) && letters.has(upper)) {
        checked.add(lower);
        checked.add(upper);
        count++;
      }
    }
  }
  return count;
}

function accountBalanceAfterPurchase(purchaseAmount) {
  const strAmount = purchaseAmount.toString();
  const lastDigit = Number(strAmount[strAmount.length - 1]);
  if (1 <= lastDigit && lastDigit <= 4)
    purchaseAmount = Math.round(purchaseAmount / 10) * 10;
  else purchaseAmount = Math.ceil(purchaseAmount / 10) * 10;
  return 100 - purchaseAmount;
}

function finalString(s) {
  let res = "";
  for (const char of s)
    if (char === "i") res = [...res].reverse().join("");
    else res += char;
  return res;
}

function finalString2(s) {
  return [...s].reduce(
    (acc, curr) => (curr === "i" ? [...acc].reverse().join("") : (acc += curr)),
    ""
  );
}

function countPairs(nums, target) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const complement = target - 1 - nums[i];
    const complementIndex = nums.indexOf(complement);
    if (complementIndex !== -1 && complementIndex !== i) result++;
  }
  console.log({ result });
  return result;
}

function isAcronym(words, s) {
  let acronym = "";
  for (const word of words) acronym += word[0];
  return acronym === s;
}

function isAcronym2(words, s) {
  return s === words.reduce((acronym, word) => (acronym += word[0]), "");
}

function furthestDistanceFromOrigin(s) {
  let diff = 0;
  let spaces = 0;
  for (const char of s)
    if (char === "_") spaces++;
    else diff += char === "L" ? -1 : 1;
  console.log({ sum: Math.abs(diff) + spaces, s: s.length, diff, spaces });
  return Math.abs(diff) + spaces;
}

function canBeEqual(s1, s2) {
  // Check for (length - 2) chars
  for (let indexI = 0; indexI < s1.length - 2; indexI++) {
    if (s1[indexI] === s2[indexI]) continue; // If the chars are equal check for next;
    if (s1[indexI] !== s2[indexI + 2]) return false;
  }

  // Last 2 chars (s1 = "cmpr" and s2 = "rmcp"), (s1 ="bnxw" s2 ="bwxn")
  for (let indexI = s1.length - 1; indexI > s1.length - 3; indexI--) {
    if (s1[indexI] === s2[indexI]) continue; // If the chars are equal check for next;
    if (s1[indexI] !== s2[indexI - 2]) return false;
  }

  return true;
}

function countSymmetricIntegers(low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    const num = String(i);
    if (num.length % 2 === 0) {
      const arr = [...num];
      let left = 0;
      let right = 0;
      for (let j = 0; j < num.length; j++) {
        if (j >= num.length / 2) right += Number(arr[j]);
        else left += Number(arr[j]);
      }
      if (left === right) count++;
    }
  }
  return count;
}

var numberOfPoints = function (nums) {
  const points = new Set();

  // Iterate over each car's coordinates
  for (const [start, end] of nums) {
    // Mark all points covered by the current car
    for (let i = start; i <= end; i++) {
      points.add(i);
    }
  }

  // Return the count of unique covered points
  return points.size;
};

function sumIndicesWithKSetBits(nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (const char of i.toString(2)) if (Number(char) === 1) count++;
    if (count === k) result += nums[i];
  }
  return result;
}

function minOperations(nums, k) {
  let result = 0;
  const set = new Set();
  for (let i = 1; i <= k; i++) set.add(i);
  for (let i = nums.length - 1; i >= 0 && set.size > 0; i--) {
    set.delete(nums[i]);
    result++;
  }
  console.log({ result });
  return result;
}

function findWordsContaining(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) 
    if (new RegExp(x).test(words[i])) res.push(i);
  return res;
}

// while (index >= 0) {
//   set.delete(index);
//   result++;
//   index--;
//   if (set.size === 0) break;
// }
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
  // singleNumber([2, 2, 1]);
  // buysell([2, 4, 1]);
  // isHappy(2);
  // containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
  // containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
  // isPowerOfNum(8, 2);
  // isAnagram("aacc", "ccac");
  // addDigits(38);
  // missingNumber([3, 0, 1]);
  // moveZeroes([0, 1, 0, 3, 12]);
  // nbiggest([3, 2, 1, 5, 6, 4], 2);
  // findErrorNums([2, 2]);
  // reverse(-123);
  // stringToNum("40");
  // intToRoman(3);
  // findDisappearedNumbers([1, 1]);
  // findComplement(5);
  // arrangeCoins(5);
  // arrangeCoinsDone(5);
  // findContentChildren([1, 2, 3], [1, 1]);
  // hammingDistance(4, 14);
  // thirdMax([2, 2, 3, 1]);
  // kMax([2, 2, 3, 1], 3);
  // addStrings("11", "123");
  // countSegments("Hello, my name is John");
  // islandPerimeter([
  //   [0, 1, 0, 0],
  //   [1, 1, 1, 0],
  //   [0, 1, 0, 0],
  //   [1, 1, 0, 0],
  // ]);
  // findContentChildrenn([1, 2], [1, 2, 3]);
  // findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
  // squareRoot(25)
  // licenseKeyFormatting("2-5g-3-J", 2);
  // convertToBase7(-100);
  // reverseWords("Mr Ding");
  // climbStairs(5);
  // rotateString("abcde", "cdeab");
  // validPalindrome("abc");
  // toLowerCase("Hello");
  // Stub([1, 2, 2, 3, 1]);
  // majorityElement([3, 2, 3]);
  // constructRectangle(4);
  // countOccurrences("a, a, a, a, b,b,b,c, c", ["a"]);
  // generateParenthesis(2)
  // customSortString("bcafg", "abcd");
  // removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]);
  // reverseArr([2, 3, 5, 0])
  // reverseSwapArr([2, 3, 5, 0, 1]);
  // kth([2, 3, 5, 0], 2);
  // numJewelsInStones("aA", "aAAbbbb");
  // test();
  // closest([-4, 5, -2, 7, 0]);
  // numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2);
  // generateApiKey();
  // genAPIKey();
  // test();
  // numIslands([
  //   ["1", "1", "0", "0", "0"],
  //   ["1", "1", "0", "0", "0"],
  //   ["0", "0", "1", "0", "0"],
  //   ["0", "0", "0", "1", "1"],
  // ]);
  // specialCharacters("abBCab");
  // accountBalanceAfterPurchase(57);
  // finalString2("poiinter");
  // maxSum([51, 71, 17, 24, 42])
  // countPairs([-6, 2, 5, -2, -7, -1, 3], -2);
  // isAcronym2(["never", "gonna", "give", "up", "on", "you"], "ngguoy");
  // furthestDistanceFromOrigin("_R__LL_");
  // canBeEqual("abcd", "cdab");
  // countSymmetricIntegers(1200, 1230);
  // sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1);
  // minOperations([1, 2], 1);
  findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
};

main();
