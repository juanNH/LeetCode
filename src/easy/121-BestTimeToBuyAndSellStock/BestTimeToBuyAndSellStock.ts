export function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        const actualValue = prices[i] - min;
        if (actualValue > maxProfit) {
            maxProfit = actualValue;
        }
    }
    return maxProfit
};