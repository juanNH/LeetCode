import { checkInclusion } from "./PermutationInString";

describe("checkInclusion", () => {
    const cases: Array<[string, string, boolean]> = [
        ["ab", "eidbaooo", true],
        ["ab", "eidboaoo", false],
        ["aab", "eidbaaooo", true],
        ["abc", "ab", false],
    ];

    test.each(cases)("checkInclusion(%s, %s) returns %s", (s1, s2, expected) => {
        expect(checkInclusion(s1, s2)).toBe(expected);
    });
});
