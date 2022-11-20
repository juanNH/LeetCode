export const numberOfSteps = (num: number): number => {
    let countSteps = 0;
    let numberToCheck = num;
    while (numberToCheck !== 0) {
        if (!(numberToCheck % 2)) {
            numberToCheck /= 2;
        } else {
            numberToCheck -= 1;
        }
        countSteps += 1;
    }
    return countSteps;
};