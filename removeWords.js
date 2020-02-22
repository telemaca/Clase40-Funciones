/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
//

const removeWords = (text, words) => {
    let textArray = text.split(" ")
    for (let i = 0; i < textArray.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[j] === textArray[i]) {
                textArray.splice(i, 1)
            }
        }
    }
    const newText = textArray.join(" ")
    return newText
}

console.log(removeWords("This is a really and uniquely bad test", ["really", "and", "uniquely"]))