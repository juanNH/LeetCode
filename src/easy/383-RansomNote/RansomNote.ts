export const canConstruct = (ransomNote: string, magazine: string): boolean => {
    const ransomNoteArray = Array.from(ransomNote);
    const magazineArray = Array.from(magazine);
    const dictionaryRansomNoteArray = {};
    const dictionaryMagazineArray = {};

    magazineArray.forEach((magazine) => {
        if (dictionaryMagazineArray[magazine]) {
            dictionaryMagazineArray[magazine] += 1;
        } else {
            dictionaryMagazineArray[magazine] = 1;
        }
    })
    ransomNoteArray.forEach((ransomNote) => {
        if (dictionaryRansomNoteArray[ransomNote]) {
            dictionaryRansomNoteArray[ransomNote] += 1;
        } else {
            dictionaryRansomNoteArray[ransomNote] = 1;
        }
    })

    const dictionaryRansomNoteArrayKeys: string[] = Object.keys(dictionaryRansomNoteArray);
    const dictionaryRansomNoteArrayValues: number[] = Object.values(dictionaryRansomNoteArray);
    for (let i = 0; i < dictionaryRansomNoteArrayKeys.length; i++) {
        if (!(dictionaryRansomNoteArrayValues[i] <= dictionaryMagazineArray[dictionaryRansomNoteArrayKeys[i]])) {
            return false;
        }
    }

    return true;
};