const wordsToChooseFrom = ["astronauta", "microscopio", "hermeneutica", "filosofia", "filologia", "esoterismo", "confeccion", "permutacion"]

//FUNCIÓN PARA ELEGIR PALABRA RANDOM
const pickARandomWord = (wordsToChooseFrom) => {
    random = Math.round(Math.random() * (wordsToChooseFrom.length - 1))
    return wordsToChooseFrom[random]
} 


const turnChosenWordIntoAsterisks = (chosenWord, userGuess = " ") => {
    let hiddenWord = chosenWord.split("")
    for (let i = 0; i < chosenWord.length; i++) { 
        userGuess === chosenWord[i] ? hiddenWord[i] = userGuess : hiddenWord[i] = "*";
    }
    return hiddenWord.join("")
}

const chosenWord = pickARandomWord(wordsToChooseFrom) //PALABRA RANDOM A ADIVINAR
console.log(chosenWord)
console.log(turnChosenWordIntoAsterisks(chosenWord))
let chosenWordWithAsterisks = turnChosenWordIntoAsterisks(chosenWord)

let keepPlaying = true; //FLAG VARIABLE


let posibbleGuesses = 6 // VARIABLE PARA LLEVAR LA CUENTA DE CHANCES QUE LE QUEDAN
let letterGuesed = true; // VARIABLE PARA SABER SI LA LETRA INGRESADA ESTÁ EN LA PALABRA
let repeatedLetter = true; // VARIABLE PARA SABER SI YA INGRESÓ ESA LETRA
let asterisksLeft = 0; // VARIABLE PARA SABER SI ADIVINÓ TODAS LAS LETRAS

alert (`La palabra a adivinar es:\n${turnChosenWordIntoAsterisks(chosenWord)}`)

while (keepPlaying) {
    const userGuess = prompt(`INGRESÁ UNA LETRA--\nTe quedan ${posibbleGuesses} chance(s).\nSi querés, podés arriesgar una palabra; pero si no acertás, perdés el juego.`)

    if (userGuess.length === 1) {
        letterGuesed = false;
        repeatedLetter = false;
        asterisksLeft = 0;
        for (let i = 0; i < chosenWord.length; i++) {
            if (userGuess === chosenWord[i] && chosenWordWithAsterisks[i] === "*") {
                chosenWordWithAsterisks[i] = userGuess
                letterGuesed = true;
            } else if (userGuess === chosenWord[i] && chosenWordWithAsterisks[i] !== "*") {
                letterGuesed = true;
                repeatedLetter = true;
            }
            if (chosenWordWithAsterisks[i] === "*") {
                asterisksLeft++
            }
        }

        if (letterGuesed && asterisksLeft === 0) {
            alert(`¡¡Ganaste!! La palabra era "${chosenWord}".`)
            keepPlaying = false    
        } else if (letterGuesed && asterisksLeft > 0 && !repeatedLetter) {
            alert(`Adivinaste una letra. La palabra ahora está así: \n${turnChosenWordIntoAsterisks(chosenWord, userGuess)}`)
        } else if (!letterGuesed && asterisksLeft > 0) {
            alert(`Nop, "${userGuess}" no está en la palabra.`)
            posibbleGuesses--
        } else if (letterGuesed && repeatedLetter) {
            alert(`¡Ya ingresaste esa letra!`)
        }

    } else if (userGuess === chosenWord) {
        alert(`¡¡Ganaste!! La palabra era "${chosenWord}".`)
        keepPlaying = false
    } else {
        alert(`¡No! Esa no era la palabra. La palabra era "${chosenWord}". Perdiste.`)
        keepPlaying = false;
    }

    if (posibbleGuesses === 0) {
        alert(`Te quedaste sin oportunidades. La palabra era "${chosenWord}".\nPerdiste.`)
        keepPlaying = false;
    }
}

// const wordsToChooseFrom = ["astronauta", "microscopio", "hermeneutica", "filosofia", "filologia", "esoterismo", "confeccion", "permutacion"]

// const pickARandomWord = (wordsToChooseFrom) => {
//     random = Math.round(Math.random() * (wordsToChooseFrom.length - 1))
//     for (let i = 0; i < wordsToChooseFrom.length; i++) {
//         randomWord = wordsToChooseFrom[random]
//     }
//     return randomWord
// }

// const chosenWord = pickARandomWord(wordsToChooseFrom)
// console.log(chosenWord)

// const turnChosenWordIntoAsterisks = (chosenWord) => {
//     let hiddenWord = ""
//     for (let i = 0; i < chosenWord.length; i++) {
//         hiddenWord += "*"        
//     }
//     return hiddenWord
// }
// console.log(turnChosenWordIntoAsterisks(hiddenWord))

// let chosenWordWithAsterisks = turnChosenWordIntoAsterisks(hiddenWord)

// let keepPlaying = true;
// let wordToAnalize = chosenWord.split("")
// let wordToCompile = chosenWordWithAsterisks.split("");
// let userGuess = ""
// let posibbleGuesses = 6
// let letterGuesed = true;
// let repeatedLetter = true;
// let asterisksLeft = 0;

// alert (`La palabra a adivinar es:\n${chosenWordWithAsterisks}`)

// while (keepPlaying) {
//     userGuess = prompt(`--INGRESÁ UNA LETRA--\nTe quedan ${posibbleGuesses} chance(s).\nSi querés, podés arriesgar una palabra; pero si no acertás, perdés el juego.`)

//     if (userGuess.length === 1) {
//         letterGuesed = false;
//         repeatedLetter = false;
//         asterisksLeft = 0;
//         for (let i = 0; i < chosenWord.length; i++) {
//             if (userGuess === wordToAnalize[i] && wordToCompile[i] === "*") {
//                 wordToCompile[i] = userGuess
//                 letterGuesed = true;
//             } else if (userGuess === wordToAnalize[i] && wordToCompile[i] !== "*") {
//                 letterGuesed = true;
//                 repeatedLetter = true;
//             }
//             if (wordToCompile[i] === "*") {
//                 asterisksLeft++
//             }
//         }
//         if (letterGuesed && asterisksLeft === 0) {
//             alert(`¡¡Ganaste!! La palabra era "${chosenWord}".`)
//             keepPlaying = false    
//         } else if (letterGuesed && asterisksLeft > 0 && !repeatedLetter) {
//             newWord = wordToCompile.join("")
//             alert(`Adivinaste una letra. La palabra ahora está así: \n${newWord}`)
//         } else if (!letterGuesed && asterisksLeft > 0) {
//             alert(`Nop, "${userGuess}" no está en la palabra.`)
//             posibbleGuesses--
//         } else if (letterGuesed && repeatedLetter) {
//             alert(`¡Ya ingresaste esa letra!`)
//         }

//     } else if (userGuess === chosenWord) {
//         alert(`¡¡Ganaste!! La palabra era "${chosenWord}".`)
//         keepPlaying = false
//     } else {
//         alert(`¡No! Esa no era la palabra. La palabra era "${chosenWord}". Perdiste.`)
//         keepPlaying = false;
//     }

//     if (posibbleGuesses === 0) {
//         alert(`Te quedaste sin oportunidades. La palabra era "${chosenWord}".\nPerdiste.`)
//         keepPlaying = false;
//     }
// }