/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */
//

const getRockPaperScissorRandomSequence = (length) => {
    possibleResults = ["piedra", "papel", "tijera"]
    result = ""
    listOfResults = ""
    for (let i = 0; i < length; i++) {
        random = Math.round(Math.random() * (possibleResults.length - 1))
        result = possibleResults[random]
        listOfResults += result + " "
    }
    return listOfResults
}

console.log(getRockPaperScissorRandomSequence(5))