export function findClosest(x: number, y: number, z: number): number {
    if(x>y && z>x){
        return 1;
    } else if(x<y && z>y) {
        return 2;
    } else if (Math.abs(z-x) <  Math.abs(z-y)){
        return 1;
    } else if (Math.abs(z-x) >  Math.abs(z-y)){
        return 2
    }
    return 0;
};