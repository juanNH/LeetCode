import { lengthOfLongestSubstring } from "./LongestSubstringWithoutRepeatingCharacters";

describe(`
Given a string s, find the length of the longest 
substring
 without repeating characters.
`, () => {
    test(`
    Test order repeating string
    `, () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toStrictEqual(3);
    });
    test(`
    Test empty string
    `, () => {
        expect(lengthOfLongestSubstring("")).toStrictEqual(0);
    });
    test(`
    Test one char string
    `, () => {
        expect(lengthOfLongestSubstring("f")).toStrictEqual(1);
    });
    test(`
    Test a one char string
    `, () => {
        expect(lengthOfLongestSubstring("bbbbb")).toStrictEqual(1);
    });
    test(`
    Test not order repeating string
    `, () => {
        expect(lengthOfLongestSubstring("jdajkwer")).toStrictEqual(7);
    });
});