import { isValid } from "./ValidParentheses";

describe(`
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 `, () => {
    test(`
    Test simple parentesis.
    `, () => {
        expect(isValid('()')).toStrictEqual(true);
    });
    test(`
    Test all case sequence.
    `, () => {
        expect(isValid('()[]{}')).toStrictEqual(true);
    });
    test(`
    Test simple false case.
    `, () => {
        expect(isValid('(]')).toStrictEqual(false);
    });
    test(`
    Test a mix false case
    `, () => {
        expect(isValid('([)]')).toStrictEqual(false);
    });
});