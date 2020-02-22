/**
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números 
 * iniciales o no
 *
 * @param {number} a 
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 * 
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 */
//

const getRange = (a, b, inclusive = true) => {
    let numberArray = []
    if (a < b && inclusive) {
        for (let i = a; i <= b; i++) {
            numberArray.push(i)
        }
    } else if (a > b && inclusive) {
        for (let i = a; i >= b; i--) {
            numberArray.push(i)
        }
    } else if (a < b && !inclusive) {
        for (let i = a+1; i < b; i++) {
            numberArray.push(i)
        }
    } else if (a > b && !inclusive) {
        for (let i = a-1; i > b; i--) {
            numberArray.push(i)
        }
    }
    return numberArray
}

console.log(getRange(5, 10))
console.log(getRange(3, -2))
console.log(getRange(9, 18, false))
console.log(getRange(-5, -10, false))