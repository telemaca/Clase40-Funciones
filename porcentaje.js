/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

//

const getPercentage = (x, percentage) => {
    return (x * percentage) / 100
}