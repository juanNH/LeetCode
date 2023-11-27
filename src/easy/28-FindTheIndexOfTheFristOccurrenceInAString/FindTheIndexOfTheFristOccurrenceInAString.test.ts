import { strStr } from "./FindTheIndexOfTheFristOccurrenceInAString";

describe(`
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
 `, () => {
    test(`
    test word is in string
    `, () => {
        expect(strStr('sadbutsad', 'sad')).toStrictEqual(0);
    });
    test(`
    test word is not in string
    `, () => {
        expect(strStr('leetcode', 'leeto')).toStrictEqual(-1);
    });
    test(`
    test word longer than string
    `, () => {
        expect(strStr('aaa', 'aaaa')).toStrictEqual(-1);
    });
    test(`
    test word in string, but in middle
    `, () => {
        expect(strStr('mississippi', 'issip')).toStrictEqual(4);
    });

});