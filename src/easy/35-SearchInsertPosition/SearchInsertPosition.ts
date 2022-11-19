export const searchInsert = (nums: number[], target: number): number => {
    const index = nums.findIndex(num => {
        if (num >= target) {
            return true;
        }
        return false;
    });
    return index === -1 ? nums.length : index
};