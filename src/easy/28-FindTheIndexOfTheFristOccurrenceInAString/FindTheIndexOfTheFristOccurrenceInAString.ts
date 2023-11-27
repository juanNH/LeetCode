export function strStr(haystack: string, needle: string): number {
    const stringSplit = haystack.split('');
    const wordSplit = needle.split('');
    if (stringSplit.length < wordSplit.length) return -1
    for (let i = 0; i < stringSplit.length; i++) {
        if (wordSplit[0] === stringSplit[i]) {
            if(haystack.split('').splice(i, wordSplit.length).join('') === needle) return i;
        }
    }
    return -1;
};