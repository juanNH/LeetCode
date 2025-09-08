import { findClosest } from "./FindClosestPerson";

describe(`
You are given three integers x, y, and z, representing the positions of three people on a number line:

x is the position of Person 1.
y is the position of Person 2.
z is the position of Person 3, who does not move.
Both Person 1 and Person 2 move toward Person 3 at the same speed.

Determine which person reaches Person 3 first:

Return 1 if Person 1 arrives first.
Return 2 if Person 2 arrives first.
Return 0 if both arrive at the same time.
Return the result accordingly.
`, () => {
    test(`
    Test case A
    `, () => {
        expect(findClosest(2,7,4)).toStrictEqual(1);
    });
    test(`
    Test case B
    `, () => {
        expect(findClosest(2,5,6)).toStrictEqual(2);
    });
    test(`
    Test case C
    `, () => {
        expect(findClosest(1,5,3)).toStrictEqual(0);
    });
});