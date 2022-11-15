export const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 1 || strs[0] === '') {
        return strs[0];
    }
    let maxToSearch: number = 1;
    let finalString: string = '';
    let stringToSearch: string = '';
    while (finalString === stringToSearch) {
        stringToSearch = strs[0].substring(0, strs[0].length - strs[0].length + maxToSearch);
        if (!strs.every((item) => item.substring(0, maxToSearch) === stringToSearch)) {
            return finalString;
        }
        maxToSearch++;
        finalString = stringToSearch;
        if (stringToSearch.length === strs[0].length) {
            return finalString;
        }
    }
    return finalString;
};