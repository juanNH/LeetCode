const Symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
export const romanToInt = (s: string): number => {
    const stringData = Array.from(s);
    let result = 0;
    for (let i = 0; i < stringData.length; i++) {
        let value = Symbols[stringData[i]];
        if (
            (Symbols[stringData[i]] === Symbols.V || Symbols[stringData[i]] === Symbols.X)
            && Symbols[stringData[i - 1]] === Symbols.I
        ) {
            value -= Symbols.I * 2;
        }
        if (
            (Symbols[stringData[i]] === Symbols.L || Symbols[stringData[i]] === Symbols.C)
            && Symbols[stringData[i - 1]] === Symbols.X
        ) {
            value -= Symbols.X * 2;
        }
        if (
            (Symbols[stringData[i]] === Symbols.D || Symbols[stringData[i]] === Symbols.M)
            && Symbols[stringData[i - 1]] === Symbols.C
        ) {
            value -= Symbols.C * 2;
        }
        result += value
    }

    return result;
};