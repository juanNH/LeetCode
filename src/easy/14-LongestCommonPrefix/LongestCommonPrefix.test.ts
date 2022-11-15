import { longestCommonPrefix } from "./LongestCommonPrefix";

describe(`
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
`, () => {
    test(`
    Test number
    `, () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toStrictEqual("fl");
    });
    test(`
    Test number
    `, () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toStrictEqual("");
    });

});