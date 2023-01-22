import { singleNumber } from "./SingleNumber";

describe(`
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
`, () => {
    test(`
    Test result last index
    `, () => {
        expect(singleNumber([2,2,1])).toStrictEqual(1);
    });
    test(`
    Test result first index
    `, () => {
        expect(singleNumber([4,1,2,1,2])).toStrictEqual(4);
    });
    test(`
    Test only result
    `, () => {
        expect(singleNumber([1])).toStrictEqual(1);
    });

});