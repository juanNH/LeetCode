export const isHappy = (n: number): boolean => {
    let securityArray: number[] = [];
    let res = n;
    let numberArray: number[] = [];
    do {
        numberArray = Array.from(String(res), Number);
        res = 0;
        for (let i = 0; i < numberArray.length; i++) {
            res += Math.pow(numberArray[i], 2);
        }
        if (securityArray.includes(res)) {
            return false
        }
        securityArray.push(res);
    } while (res !== 1)
    return true;
};