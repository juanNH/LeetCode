import { searchInsert } from "./SearchInsertPosition";

describe(`
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 `, () => {
    test(`
    test number in array
    `, () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2);
    });
    test(`
    test number higher than last number in array
    `, () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(4);
    });
    test(`
    test number in higher and lower than a number in array(insert into array)
    `, () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1);
    });

});