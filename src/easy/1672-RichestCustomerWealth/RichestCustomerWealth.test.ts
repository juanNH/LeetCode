import { maximumWealth } from "./RichestCustomerWealth";

describe(`
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
`, () => {
    test(`
    Test customers with the same amount of money.
    `, () => {
        expect(maximumWealth([[1, 2, 3], [3, 2, 1]])).toStrictEqual(6);
    });
    test(`
    Test customers with different amount of money.
    `, () => {
        expect(maximumWealth([[1, 5], [7, 3], [3, 5]])).toStrictEqual(10);
    });

});