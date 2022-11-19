export const maxArea = (height: number[]): number => {
    let maxArea: number = 0;
    let actual = 0;
    let end = height.length - 1
    while (actual < end) {
        const area = Math.min(height[actual], height[end]) * (end - actual);
        if (maxArea < area) {
            maxArea = area;
        }
        if (height[actual] < height[end]) {
            actual++;
        } else {
            end--;
        }
    }

    return maxArea;
};