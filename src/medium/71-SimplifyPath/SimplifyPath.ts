export function simplifyPath(path: string): string {
    const pathArr = path.split('/').filter(item => item !== '');
    let pathReturnArr: string[] = []
    for(let i = 0 ; i <= pathArr.length-1; i++) {
        if(pathArr[i] == '..'){
            pathReturnArr.pop();
        } else if(pathArr[i] !== '.'){
            pathReturnArr.push(pathArr[i]);
        }
    }
    return '/'+pathReturnArr.join('/');
};