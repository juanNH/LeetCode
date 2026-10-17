export function checkInclusion(s1: string, s2: string): boolean {
    const windowSize = s1.length;

    if (windowSize > s2.length) return false;

    // Diferencia entre las frecuencias de s1 y la ventana actual de s2.
    const difference = new Int32Array(26);

    for (let i = 0; i < windowSize; i++) {
        difference[s1.charCodeAt(i) - 97]++;
        difference[s2.charCodeAt(i) - 97]--;
    }

    const hasSameLetters = () => difference.every(count => count === 0);

    if (hasSameLetters()) return true;

    for (let right = windowSize; right < s2.length; right++) {
        const outgoingIndex = s2.charCodeAt(right - windowSize) - 97;
        const incomingIndex = s2.charCodeAt(right) - 97;

        difference[outgoingIndex]++; // Sale una letra de la ventana
        difference[incomingIndex]--; // Entra una letra

        if (hasSameLetters()) return true;
    }

    return false;
}