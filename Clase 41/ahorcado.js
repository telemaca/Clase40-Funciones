const words = ["astronauta", "microscopio", "hermeneutica", "filosofia", "filologia", "esoterismo", "confeccion", "permutacion"]

//FUNCIÓN PARA ELEGIR PALABRA RANDOM
const getRandomWord = (words) => {
    random = Math.round(Math.random() * (words.length - 1))
    return words[random]
} 

const toAsterisks = (word, letters = []) => {
    let hiddenWord = ""
    for (let i = 0; i < word.length; i++) { 
        // userGuess === word[i] ? hiddenWord += userGuess : hiddenWord += "*";
        hiddenWord += letters.includes(word[i]) ? word[i]: "*";  
    }
    return hiddenWord
}
//Con esta función, en cada vuelta del while se me reinicia y no me incluye el guess anterior.

const isLetter = (userGuess) => userGuess.length === 1

const word = getRandomWord(words) //PALABRA RANDOM A ADIVINAR
console.log(word)
console.log(toAsterisks(word))
let wordWithAsterisks = toAsterisks(word)

let keepPlaying = true; //FLAG VARIABLE


let posibbleGuesses = 6 // VARIABLE PARA LLEVAR LA CUENTA DE CHANCES QUE LE QUEDAN
let letterGuesed = true; // VARIABLE PARA SABER SI LA LETRA INGRESADA ESTÁ EN LA PALABRA
let repeatedLetter = true; // VARIABLE PARA SABER SI YA INGRESÓ ESA LETRA
let asterisksLeft = 0; // VARIABLE PARA SABER SI ADIVINÓ TODAS LAS LETRAS
let letters = []

alert (`La palabra a adivinar es:\n${wordWithAsterisks}`)

while (keepPlaying) {
    const userGuess = prompt(`INGRESÁ UNA LETRA--\nTe quedan ${posibbleGuesses} chance(s).\nSi querés, podés arriesgar una palabra; pero si no acertás, perdés el juego.`)
    wordWithAsterisks = toAsterisks(word, userGuess)


    if (isLetter(userGuess) && word.includes(userGuess)) {
        letters.push(userGuess)
        alert(`Adivinaste una letra. La palabra ahora está así: \n${wordWithAsterisks}`)
    } else if (isLetter(userGuess) && !word.includes(userGuess)) {
        alert(`Nop, "${userGuess}" no está en la palabra.`)
        posibbleGuesses--
    } else if (!isLetter(userGuess) && userGuess === word) {
        alert(`¡¡Ganaste!! La palabra era "${word}".`)
        keepPlaying = false
    } else if (!isLetter(userGuess) && userGuess !== word) {
        alert(`¡No! Esa no era la palabra. La palabra era "${word}". Perdiste.`)
        keepPlaying = false;
    }
    //     letterGuesed = false;
    //     repeatedLetter = false;
    //     asterisksLeft = 0;
    //     for (let i = 0; i < word.length; i++) {
    //         if (userGuess === word[i] && wordWithAsterisks[i] === "*") {
    //             wordWithAsterisks[i] = userGuess
    //             letterGuesed = true;
    //         } else if (userGuess === word[i] && wordWithAsterisks[i] !== "*") {
    //             letterGuesed = true;
    //             repeatedLetter = true;
    //         }
    //         if (wordWithAsterisks[i] === "*") {
    //             asterisksLeft++
    //         }
    //     }

    //     if (letterGuesed && asterisksLeft === 0) {
    //         alert(`¡¡Ganaste!! La palabra era "${word}".`)
    //         keepPlaying = false    
    //     } else if (letterGuesed && asterisksLeft > 0 && !repeatedLetter) {
    //         alert(`Adivinaste una letra. La palabra ahora está así: \n${wordWithAsterisks}`)
    //     } else if (!letterGuesed && asterisksLeft > 0) {
    //         alert(`Nop, "${userGuess}" no está en la palabra.`)
    //         posibbleGuesses--
    //     } else if (letterGuesed && repeatedLetter) {
    //         alert(`¡Ya ingresaste esa letra!`)
    //     }

    // } else if (userGuess === word) {
    //     alert(`¡¡Ganaste!! La palabra era "${word}".`)
    //     keepPlaying = false
    // } else {
    //     alert(`¡No! Esa no era la palabra. La palabra era "${word}". Perdiste.`)
    //     keepPlaying = false;
    // }

    // if (posibbleGuesses === 0) {
    //     alert(`Te quedaste sin oportunidades. La palabra era "${word}".\nPerdiste.`)
    //     keepPlaying = false;
    // }
}

// const words = ["astronauta", "microscopio", "hermeneutica", "filosofia", "filologia", "esoterismo", "confeccion", "permutacion"]

// const getRandomWord = (words) => {
//     random = Math.round(Math.random() * (words.length - 1))
//     for (let i = 0; i < words.length; i++) {
//         randomWord = words[random]
//     }
//     return randomWord
// }

// const word = getRandomWord(words)
// console.log(word)

// const toAsterisks = (word) => {
//     let hiddenWord = ""
//     for (let i = 0; i < word.length; i++) {
//         hiddenWord += "*"        
//     }
//     return hiddenWord
// }
// console.log(toAsterisks(hiddenWord))

// let wordWithAsterisks = toAsterisks(hiddenWord)

// let keepPlaying = true;
// let wordToAnalize = word.split("")
// let wordToCompile = wordWithAsterisks.split("");
// let userGuess = ""
// let posibbleGuesses = 6
// let letterGuesed = true;
// let repeatedLetter = true;
// let asterisksLeft = 0;

// alert (`La palabra a adivinar es:\n${wordWithAsterisks}`)

// while (keepPlaying) {
//     userGuess = prompt(`--INGRESÁ UNA LETRA--\nTe quedan ${posibbleGuesses} chance(s).\nSi querés, podés arriesgar una palabra; pero si no acertás, perdés el juego.`)

//     if (userGuess.length === 1) {
//         letterGuesed = false;
//         repeatedLetter = false;
//         asterisksLeft = 0;
//         for (let i = 0; i < word.length; i++) {
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
//             alert(`¡¡Ganaste!! La palabra era "${word}".`)
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

//     } else if (userGuess === word) {
//         alert(`¡¡Ganaste!! La palabra era "${word}".`)
//         keepPlaying = false
//     } else {
//         alert(`¡No! Esa no era la palabra. La palabra era "${word}". Perdiste.`)
//         keepPlaying = false;
//     }

//     if (posibbleGuesses === 0) {
//         alert(`Te quedaste sin oportunidades. La palabra era "${word}".\nPerdiste.`)
//         keepPlaying = false;
//     }
// }