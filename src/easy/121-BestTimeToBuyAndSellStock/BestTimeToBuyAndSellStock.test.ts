import { maxProfit } from "./BestTimeToBuyAndSellStock";

describe(`
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`, () => {
    test(`
    Test profit result
    `, () => {
        expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(5);
    });
    test(`
    Test no profit result
    `, () => {
        expect(maxProfit([7,6,4,3,1])).toStrictEqual(0);
    });

});