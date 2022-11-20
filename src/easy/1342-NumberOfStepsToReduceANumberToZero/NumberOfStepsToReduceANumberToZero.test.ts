import { numberOfSteps } from "./NumberOfStepsToReduceANumberToZero";

describe(`
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
`, () => {
    test(`
    Test normal case
    `, () => {
        expect(numberOfSteps(14)).toStrictEqual(6);
    });
    test(`
    Test 1 step
    `, () => {
        expect(numberOfSteps(1)).toStrictEqual(1);
    });
    test(`
    Test no steps
    `, () => {
        expect(numberOfSteps(0)).toStrictEqual(0);
    });
});