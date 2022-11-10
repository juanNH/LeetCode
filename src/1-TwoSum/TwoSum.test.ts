import { twoSum } from "./TwoSum";

describe(`
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
`, () => {
  test(`
    Test to search the first solution posible
    `, () => {
    expect(twoSum([1,2,3,4,5],5)).toStrictEqual([0,3]);
  });
  test(`
  Test to recieve a empty array if not match result
  `, () => {
  expect(twoSum([1,2,3,4,5],55)).toStrictEqual([]);
});
});