/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} number - El número a evaluar si encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {number} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

//

const isInRange = (x, min, max) => {
    return x > min && x < max;
}