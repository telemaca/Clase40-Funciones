/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */
//

const getRockPaperScissor = () => {
    possibleResults = ["piedra", "papel", "tijera"]
    random = Math.round(Math.random() * 2)
    rockPaperScissor = possibleResults[random]
    return rockPaperScissor
}

console.log(getRockPaperScissor())