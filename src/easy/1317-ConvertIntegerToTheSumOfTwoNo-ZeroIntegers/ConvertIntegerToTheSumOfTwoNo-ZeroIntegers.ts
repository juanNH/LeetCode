export function getNoZeroIntegers(n: number): number[] {
    let n1 = n;
    let n2 = 0;
    while(String(n2).includes("0") || String(n1).includes("0")){
        n1 --;
        n2 ++; 
    }
    return [n1,n2];
};