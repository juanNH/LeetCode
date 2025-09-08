import { getNoZeroIntegers } from "./ConvertIntegerToTheSumOfTwoNo-ZeroIntegers";

describe(`
No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

Given an integer n, return a list of two integers [a, b] where:

a and b are No-Zero integers.
a + b = n
The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.
`, () => {
    test(`
    Test asc array
    `, () => {
        expect(getNoZeroIntegers(2)).toStrictEqual([1,1]);
    });
    test(`
    Test desc array
    `, () => {
        expect(getNoZeroIntegers(11)).toStrictEqual([9,2]);
    });
    test(`
    Test false array
    `, () => {
        expect(getNoZeroIntegers(33)).toStrictEqual([32,1]);
    });
});