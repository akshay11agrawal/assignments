/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
str = str.toLowerCase();
str = str.replace(/[^a-zA-Z0-9]/g,"");
let initialIndex = 0;
let flag = true;

for(let i =str.length-1; i >= 0 ; i--){

  if(str.charAt(i)!==str.charAt(initialIndex)){
    flag = false;
  }
  initialIndex++;
}

  return flag;
}

module.exports = isPalindrome;
