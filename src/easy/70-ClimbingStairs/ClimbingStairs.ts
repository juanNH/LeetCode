export const climbStairs = (n: number): number => {
    let fibArr: number[] = [];
    fibArr[0] = 0;
    fibArr[1] = 1;

    for (let i = 2; i <= n + 1; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }

    return fibArr[n + 1];
};