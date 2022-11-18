export const kWeakestRows = (mat: number[][], k: number): number[] => {
    let soldiersArray: { index: number, soldiers: number }[] = [];
    for (let i = 0; i < mat.length; i++) {
        const soldiers: number = mat[i].reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0);
        soldiersArray.push({ index: i, soldiers });
    }

    return soldiersArray.sort(function (a, b) { return a.soldiers - b.soldiers }).slice(0, k).map(item => item.index);
};