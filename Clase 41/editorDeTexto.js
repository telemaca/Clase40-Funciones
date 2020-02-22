// "agregar": agregar texto
// "cortar": pide dos números de índice entre los cuáles recortar el texto
// "eliminar palabra": elimina una palbra del texto
// "buscar subtexto": busca un string dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "buscar palabra": busca una palabra dentro del texto y devuelve un mensaje diciendo si lo encontró o no
// "contar letras": mostrar cuántas letras tiene el texto sin espacios
// "contar palabras": mostrar cuántas palabras tiene el texto
// Al elegir la opción debe mostrar el texto modificado y permitir seguir realizando acciones. Investigar métodos toUpperCase, toLowerCase, replace, includes, slice, substring.

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

let keepGoing = true;
let actionToPerform = ""
let text = prompt(`Ingrese el texto:`)

while (keepGoing) {
    actionToPerform = prompt(`El texto es "${text}".\n¿Qué desea hacer? DUPLICAR / REEMPLAZAR / AGREGAR / CORTAR / ELIMINAR PALABRA / BUSCAR SUBTEXTO / BUSCAR PALABRA / MAYUSCULAS / MINUSCULAS / CONTAR LETRAS / CONTAR PALABRAS / HACKER SPEAK / SALIR`)

    switch (actionToPerform) {
        case "DUPLICAR":
            text = (text + " ").repeat(2)
            alert(text)
            break;
        case "REEMPLAZAR":
            a = prompt(`¿Qué quiere reemplazar?`)
            b = prompt(`¿Con qué lo quiere reemplazar?`)
            text = text.replace(a, b)
            alert(text)
            break;
        case "AGREGAR":

            break;
        case "CORTAR":

            break;
        case "ELIMINAR PALABRA":

            break;
        case "BUSCAR SUBTEXTO":
            a = prompt(`Ingrese el texto que quiere buscar:`)
            alert(`El subtexto "${a}" ${text.includes(a) ? 'está' : 'no está'} en el texto ingresado.`)
            break;
        case "BUSCAR PALABRA":
            a = prompt(`Ingrese la palabra que quiere buscar:`)
            alert(`La palabra "${a}" ${text.includes(a) ? 'está' : 'no está'} en el texto ingresado.`)
            break;
        case "MAYUSCULAS":
            text = text.toUpperCase()
            alert(text)
            break;
        case "MINUSCULAS":
            text = text.toLowerCase()
            alert(text)
            break;
        case "CONTAR LETRAS":

            break;
        case "CONTAR PALABRAS":

            break;
        case "HACKER SPEAK":
            text = toHackerSpeak(text)
            alert(text)
            break;
        
        case "a":
            keepGoing =  false;
    }
}