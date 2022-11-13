export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const arrayNum = nums1.concat(nums2).sort((a, b) => a - b);
    const ceilNumber = Math.ceil(arrayNum.length / 2)
    if (arrayNum.length % 2 === 0) {
        return (arrayNum[ceilNumber - 1] + arrayNum[ceilNumber]) / 2;
    }
    return arrayNum[ceilNumber - 1];
};