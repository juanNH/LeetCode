export const isPalindrome = (x: number): boolean => {
    if (x < 0) {
        return false;
    }
    const palArray = Array.from(String(x));
    for (let i = 0; i < palArray.length / 2; i++) {
        if (palArray[i] !== palArray[palArray.length - 1 - i]) {
            return false;
        }
    }
    return true;
};