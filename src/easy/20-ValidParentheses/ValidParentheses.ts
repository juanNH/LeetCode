export const isValid = (s: string): boolean => {
    let tempData: string[] = []
    const stringArray = Array.from(s);
    for (let i = 0; i < stringArray.length; i++) {
        switch (stringArray[i]) {
            case '(':
                tempData.push(')');
                break;
            case '{':
                tempData.push('}');
                break;
            case '[':
                tempData.push(']');
                break;
            default:
                if (stringArray[i] !== tempData[tempData.length - 1]) {
                    return false;
                }
                tempData.pop();
                break;
        }
    }
    return !Boolean(tempData.length);
};