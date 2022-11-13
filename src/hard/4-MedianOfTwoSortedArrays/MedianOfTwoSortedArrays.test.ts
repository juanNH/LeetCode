import { findMedianSortedArrays } from "./MedianOfTwoSortedArrays";

describe(`
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n))
`, () => {
    test(`
    Test array
    `, () => {
        expect(findMedianSortedArrays([1,2],[3,4])).toStrictEqual(2.5);
    });
    test(`
    Test array with negatives numbers
    `, () => {
        expect(findMedianSortedArrays([1, 23, 3, 45, 1, -2], [-2, -3, -97])).toStrictEqual(1);
    });
});