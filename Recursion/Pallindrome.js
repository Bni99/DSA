// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.
// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

const isPallindrome = function (str, start = 0, end = str.length - 1) {
  if (start < end) {
    if (str[start] !== str[end]) return false;
    else {
      isPallindrome(str, start + 1, end - 1);
    }
  }
  return true;
};

console.log(isPallindrome("ABCDCBAM"));
