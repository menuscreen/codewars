/*
  An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

  Note: anagrams are case insensitive

  Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

  Examples
  "foefet" is an anagram of "toffee"
  "Buckethead" is an anagram of "DeathCubeK"
*/

// write the function isAnagram
var isAnagram = function(test, original) {
  if(test.length !== original.length){
    return false;
  }else{
    let sortedTest = test.toLowerCase().split('').sort().join('');
    let sortedOriginal = original.toLowerCase().split('').sort().join('');
    
    return (sortedTest === sortedOriginal);
  }
};

// prototype example:
/*
  String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
  }

  var isAnagram = function(test, original) {
    return test.sortLetters() == original.sortLetters();
  };
*/