/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let numOfVowels = 0;
    str = str.toLowerCase();

    for(let i = 0  ; i <str.length; i++){
      let strChar = str.charAt(i);
      if(vowels.find(obj => obj === strChar)){
        numOfVowels++;
      }
    }

    return numOfVowels;
}

module.exports = countVowels;