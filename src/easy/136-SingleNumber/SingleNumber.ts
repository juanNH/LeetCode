export const singleNumber = (nums: number[]): number => {
    while (0 < nums.length) {
        if (nums.filter(item => item === nums[0]).length === 1) {
            return nums[0];
        } else {
            nums = nums.filter(item => item !== nums[0]);
        }
    }
    return 0;
};