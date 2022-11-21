import { isMonotonic } from "./MonotonicArray";

describe(`
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
`, () => {
    test(`
    Test asc array
    `, () => {
        expect(isMonotonic([1, 2, 2, 3])).toStrictEqual(true);
    });
    test(`
    Test desc array
    `, () => {
        expect(isMonotonic([6, 5, 4, 4])).toStrictEqual(true);
    });
    test(`
    Test false array
    `, () => {
        expect(isMonotonic([1, 3, 2])).toStrictEqual(false);
    });
});