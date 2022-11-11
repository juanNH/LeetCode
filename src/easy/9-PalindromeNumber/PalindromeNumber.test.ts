import { isPalindrome } from "./PalindromeNumber";

describe(`
Given an integer x, return true if x is a palindrome, and false otherwise.
`, () => {
    test(`
    Test number is palindrome
    `, () => {
        expect(isPalindrome(222333222)).toStrictEqual(true);
    });
    test(`
  Test number is not palindrome
  `, () => {
        expect(isPalindrome(222666)).toStrictEqual(false);
    });
});