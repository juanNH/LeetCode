export const lengthOfLongestSubstring = (s: string): number => {
    if (!s) {
        return 0;
    }
    let max: number = 1;
    const stringToCheck = s.split("");
    let stringToSearch: string[] = [s[0]];
    for (let i = 1; i < stringToCheck.length; i++) {
        const indexOfRepeat = stringToSearch.indexOf(stringToCheck[i]);
        if (indexOfRepeat < 0) {
            stringToSearch.push(stringToCheck[i]);
            if (max < stringToSearch.length) {
                max = stringToSearch.length;
            }
        } else {
            stringToSearch = stringToSearch.slice(indexOfRepeat + 1);
            stringToSearch.push(stringToCheck[i]);
        }

    };
    return max;
};