import { buildArray } from "./BuildArrayFromPermutation";

describe(`
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
`, () => {
    test(`
    Test case A
    `, () => {
        expect(buildArray([0, 2, 1, 5, 3, 4])).toStrictEqual([0, 1, 2, 4, 5, 3]);
    });
    test(`
    Test case B
    `, () => {
        expect(buildArray([5, 0, 1, 2, 3, 4])).toStrictEqual([4, 5, 0, 1, 2, 3]);
    });
});