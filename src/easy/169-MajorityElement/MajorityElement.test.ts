import { majorityElement } from "./MajorityElement";

describe(`
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
`, () => {
    test(`
    Test a simple case
    `, () => {
        expect(majorityElement([2,2,1])).toStrictEqual(2);
    });
    test(`
    Test multiles values
    `, () => {
        expect(majorityElement([4,1,2,1,2,1])).toStrictEqual(1);
    });
    test(`
    Test only value
    `, () => {
        expect(majorityElement([1])).toStrictEqual(1);
    });

});