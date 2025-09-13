export function doesAliceWin(s: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let turn = 3;
    while (s != "") {
        let aliceCounter = 0;
        let aliceI;
        let bobCounter = 0;
        let bobI;
        for (let i = 0; i < s.length; i++) {
            if (turn % 2 === 1) {
                if (vowels.includes(s[i])) {
                    aliceCounter++;
                    if (aliceCounter % 2 === 1) {
                        aliceI = i
                    }
                }
            } else {
                if (vowels.includes(s[i])) {
                    bobCounter++;
                }
                if (aliceCounter % 2 === 0) {
                    bobI = i
                }
            }
        }
        if (turn % 2 === 1) {
            if (aliceI !== undefined) {
                s.slice(0, aliceI);
            } else {
                return false;
            }
        } else {
            if (aliceI !== undefined) {
                s.slice(0, bobI);
            } else {
                return true;
            }
        }
        turn++;
    }
    return false;
}