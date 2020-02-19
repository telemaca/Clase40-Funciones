/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */
//

const areArraysEqual = (a, b) => {
    let sameArrays = true;
        for (i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                sameArrays = false;
            }
        }
    return sameArrays
}

console.log(areArraysEqual([1, 4], [1, 4]))