// "cortar": pide dos números de índice entre los cuáles recortar el texto
const countLetters = (text) => {
    let x = 0;
    for(let i = 0; i < text.length; i++) {
        if (text[i] !== " " && text[i] !== "," && text[i] !== "."){
            x++
        }
    }
    return x
}

const countWords = (text) => text.split(" ").length

const addText = (text, textToAdd) => {
    let a = text.split(" ")
    a.push(textToAdd)
    let b = a.join(" ")
    return b
}

const cutText = (text, whereToCut1, whereToCut2) => {
    text = text.split(" ")
    text.splice(whereToCut1-1, (whereToCut2-whereToCut1+1))
    return text.join(" ")
}

const deleteWord = (text, wordToDelete) => {
    let a = text.split(" ")
    const wordIndex = a.indexOf(wordToDelete)
    a.splice(wordIndex, 1)
    return a.join(" ")
}

const toHackerSpeak = (text) => {
    let letterArray = text.split("")
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

let keepGoing = true; //FLAG variable
let text = prompt(`Ingrese el texto:`)

while (keepGoing) {
    const actionToPerform = prompt(`El texto es "${text}".\n¿Qué desea hacer? 1-DUPLICAR / 2-REEMPLAZAR / 3-AGREGAR / 4-CORTAR / 5-ELIMINAR PALABRA / 6-BUSCAR SUBTEXTO / 7-BUSCAR PALABRA / 8-MAYUSCULAS / 9-MINUSCULAS / 10-CONTAR LETRAS / 11-CONTAR PALABRAS / 12-HACKER SPEAK / 13-SALIR`)

    switch (actionToPerform) {
        case "1": //DUPLICAR
            text = (text + " ").repeat(2)
            alert(text)
            break;
        case "2": //REEMPLAZAR
            const a = prompt(`¿Qué quiere reemplazar?`)
            if (text.includes(a)) {
                const b = prompt(`¿Con qué lo quiere reemplazar?`)
                text = text.replace(a, b)
                alert(text)
            } else {
                alert(`"${a}" no está en el texto ingresado. Pruebe de nuevo.`)
            }
            break;
        case "3": //AGREGAR
            const textToAdd = prompt(`Ingrese el texto a agregar al final:`)
            text = addText(text, textToAdd)
            alert(text)
            break;
        case "4": //CORTAR
            const whereToCut1 = Number(prompt(`Ingrese el número de palabra a partir del cual cortar.`))
            const whereToCut2 = Number(prompt(`Ingrese el número de palabra hasta la cual cortar`))
            text = cutText(text, whereToCut1, whereToCut2)
            alert(text)
            break;
        case "5": //ELIMINAR PALABRA
            const wordToDelete = prompt(`Ingrese la palabra que quiere eliminar:`)
            text.includes(wordToDelete) ? text = deleteWord(text, wordToDelete) : alert(`"${wordToDelete}" no está en el texto.`)
            break;
        case "6": //BUSCAR SUBTEXTO
            const subtext = prompt(`Ingrese el texto que quiere buscar:`)
            alert(`El subtexto "${subtext}" ${text.includes(subtext) ? 'está' : 'no está'} en el texto ingresado.`)
            break;
        case "7": //BUSCAR PALABRA
            const wordToSearch = prompt(`Ingrese la palabra que quiere buscar:`)
            alert(`La palabra "${wordToSearch}" ${text.includes(wordToSearch) ? 'está' : 'no está'} en el texto ingresado.`)
            break;
        case "8": //MAYUSCULAS
            text = text.toUpperCase()
            alert(text)
            break;
        case "9": //MINUSCULAS
            text = text.toLowerCase()
            alert(text)
            break;
        case "10": //CONTAR LETRAS
            const letters = countLetters(text)
            alert(`El texto tiene ${letters} letras.`)
            break;
        case "11": //CONTAR PALABRAS
            const words = countWords(text) 
            alert (`El texto tiene ${words} palabras.`)
            break;
        case "12": //HACKER SPEAK
            text = toHackerSpeak(text)
            alert(text)
            break;
        case "13": //SALIR
            keepGoing = false;
            break;
        default:
            alert(`No ingresaste una opción válida.`)
    }
}