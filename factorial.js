/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */
//

const getFactorial = (x) => {
    numberToFactor = x;
    for (i = 1; i < x; i++) {
        numberToFactor *= i;
    }
    return numberToFactor
}

console.log(getFactorial())