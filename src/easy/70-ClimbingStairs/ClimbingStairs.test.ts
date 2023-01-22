import { climbStairs } from "./ClimbingStairs";

describe(`
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 
`, () => {
    test(`
    Test 2 stairs
    `, () => {
        expect(climbStairs(2)).toStrictEqual(2);
    });
    test(`
    Test 3 stairs
    `, () => {
        expect(climbStairs(3)).toStrictEqual(3);
    });
    test(`
    Test 4 stairs
    `, () => {
        expect(climbStairs(4)).toStrictEqual(5);
    });
    test(`
    Test 5 stairs
    `, () => {
        expect(climbStairs(5)).toStrictEqual(8);
    });
});