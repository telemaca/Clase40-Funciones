/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */
//

const getRandomColorSequence = (colors, length) => {
    color = ""
    colorList = ""
    for (let i = 0; i < length; i++) {
        random = Math.round(Math.random() * (colors.length - 1))
        color = colors[random]
        colorList += color + " "
    }
    return colorList
}

console.log(getRandomColorSequence(["rojo", "azul", "amarillo", "verde"], 9))