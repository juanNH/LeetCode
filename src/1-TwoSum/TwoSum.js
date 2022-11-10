"use strict";
exports.__esModule = true;
exports.twoSum = void 0;
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};
exports.twoSum = twoSum;
