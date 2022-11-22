export const moveZeroes = (nums: number[]): number[] => {
    let count = nums.length;
    let i = 0;
    while (i < count) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            count--;
        } else {
            i++;
        }
    }
    return nums
};