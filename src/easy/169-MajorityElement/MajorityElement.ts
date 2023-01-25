export const majorityElement = (nums: number[]): number => {
    const dictionary = {}
    let maxElement
    for (let i = 0; i < nums.length; i++) {
        dictionary[nums[i]] ? dictionary[nums[i]] += 1 : dictionary[nums[i]] = 1;
        if (!maxElement || (dictionary[maxElement] < dictionary[nums[i]])) {
            maxElement = nums[i];
            if (dictionary[nums[i]] > nums.length / 2) {
                return maxElement;
            }
        }

    }
    return maxElement;
};