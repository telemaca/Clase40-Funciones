/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */
//

const toHackerSpeak = (textToTranslate) => {
    let letterArray = textToTranslate.split("")
    for (let i = 0; i < letterArray.length; i++) {
        switch (letterArray[i]) {
            case "a":
            case "A":
                letterArray[i] = 4
                break;
            case "e":
            case "E":
                letterArray[i] = 3
                break;
            case "i":
            case "I":
                letterArray[i] = 1
                break;
            case "o":
            case "O":
                letterArray[i] = 0
                break;
            case "s":
            case "S":
                letterArray[i] = 5
                break;
        }
    }
    const translatedText = letterArray.join("")
    return translatedText
}

console.log(toHackerSpeak("Bienvenidos a la Bahía Pirata."))