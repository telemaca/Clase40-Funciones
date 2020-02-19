/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */
//

const getFlatArray = (numbersArrays) => {
    let newArray = []
        for (let i = 0; i < numbersArrays.length; i++) {
            for (let j = 0; j < numbersArrays[i].length; j++) {
                newArray.push(numbersArrays[i][j])                
            }            
        }
    return newArray
}

console.log(getFlatArray([[1, 5, 4], [3, 10], [2, 5]]))