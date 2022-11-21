export const isMonotonic = (nums: number[]): boolean => {
    let type = "";
    for (let i = 0; i < nums.length - 1; i++) {
        switch (type) {
            case "asc":
                if (nums[i] > nums[i + 1]) {
                    return false
                }
                break;
            case "desc":
                if (nums[i] < nums[i + 1]) {
                    return false;
                }
                break;
            default:
                if (nums[i] < nums[i + 1]) {
                    type = "asc"
                    break;
                }
                if (nums[i] > nums[i + 1]) {
                    type = "desc"
                    break;
                }
        }
    }
    return true
};