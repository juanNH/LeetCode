import { moveZeroes } from "./MoveZeroes";

describe(`
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
`, () => {
    test(`
    Test acending array
    `, () => {
        expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
    });
    test(`
    Test decending array
    `, () => {
        expect(moveZeroes([6, 0, 3, 1, 0])).toStrictEqual([6, 3, 1, 0, 0]);
    });
    test(`
    Test single array
    `, () => {
        expect(moveZeroes([2])).toStrictEqual([2]);
    });
    test(`
    Test cero array
    `, () => {
        expect(moveZeroes([0, 0, 0])).toStrictEqual([0, 0, 0]);
    });
    test(`
    Test mix array
    `, () => {
        expect(moveZeroes([0, 3, 2, 0, 5, 6, 0, 7])).toStrictEqual([3, 2, 5, 6, 7, 0, 0, 0]);
    });

});