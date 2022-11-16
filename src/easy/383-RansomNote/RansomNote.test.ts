import { canConstruct } from "./RansomNote";

describe(`
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
`, () => {
    test(`
    Test 2 different strings
    `, () => {
        expect(canConstruct("a", "b")).toStrictEqual(false);
    });
    test(`
    Test 2 sames strings
    `, () => {
        expect(canConstruct("aa", "aa")).toStrictEqual(true);
    });
    test(`
    Test 2 strings with magazine contains ransomNote
    `, () => {
        expect(canConstruct("aa", "aab")).toStrictEqual(true);
    });


});