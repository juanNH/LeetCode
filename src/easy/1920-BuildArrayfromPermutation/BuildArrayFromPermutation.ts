export const buildArray = (nums: number[]): number[] => {
    let responseArray: number[] = [];
    nums.forEach(item => {
        responseArray.push(nums[item]);
    })
    return responseArray;
};