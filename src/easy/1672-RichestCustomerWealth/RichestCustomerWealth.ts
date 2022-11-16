export const maximumWealth = (accounts: number[][]): number => {
    let maxMoney = 0;
    let moneyCustomer = 0;
    accounts.forEach(customerMoney => {
        moneyCustomer = customerMoney.reduce((prevBank, currentBank) => prevBank + currentBank, 0);
        if (moneyCustomer > maxMoney) {
            maxMoney = moneyCustomer;
        }
    })
    return maxMoney;
};