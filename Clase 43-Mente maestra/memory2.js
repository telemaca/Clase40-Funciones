//---------------------------------------------------------------------------------------------------
//----------------------OBTENER TABLERO RANDOM-------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Creamos función para duplicar items
const duplicarElementos = (items) => {
    const duplicados = []
    let i = 0;
    while (duplicados.length < items.length * 2) {
        duplicados.push(items[i])
        duplicados.push(items[i])
        i++;
    }
    return duplicados
}

//Creamos función para establecer posiciones aleatorias en el tablero final
const obtenerIndexRandom = items => Math.round(Math.random() * (items.length - 1))

//Creamos función para randomizar items
const randomizarItems = (items) => {
    const indicesRnd = []
    const itemsRnd = []

    while (indicesRnd.length < items.length) {
        const indexRnd = obtenerIndexRandom(items)
        if (!indicesRnd.includes(indexRnd)) {
            indicesRnd.push(indexRnd)
            itemsRnd.push(items[indexRnd])
        }
    }
    return itemsRnd
}

//Creamos función para transformar el array en un array 2D de 4x3
const array2d = (items) => {
    const tablero = []
    for (let i = 0; i < items.length; i += 4) {
        const fila = items.slice(i, i + 4)
        tablero.push(fila)
    }
    return tablero
}

//Creamos función que llama a las funciones previas y nos da como resultados un array2D de 4x3 con 12 items ubicados de forma aleatoria
const obtenerTableroRandom = (items) => {
    const itemsDuplicados = duplicarElementos(items)
    const itemsRandoms = randomizarItems(itemsDuplicados)
    const tablero = array2d(itemsRandoms)

    return tablero
}



//---------------------------------------------------------------------------------------------------
//----------------------OBTENER COORDENADAS----------------------------------------------------------
//---------------------------------------------------------------------------------------------------


//Creamos función para crear un array 2D con las coordenadas
const separarCoordenadas = (jugada) => {
    const coordenadasArray = []
    coordenadasArray.push(jugada[0].split(","))
    coordenadasArray.push(jugada[1].split(","))
    return coordenadasArray
}

//---------------------------------------------------------------------------------------------------
//-------------------------ELEMENTO ADIVINADO--------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Creamos función que nos devuelve de qué elemento se encontró el par (después se pushea a un array en el loop). 
const obtenerAdivinado = (tableroRandom, coordenadas) => {
    const x = coordenadas[0][0]
    const y = coordenadas[0][1]
    const w = coordenadas[1][0]
    const z = coordenadas[1][1]

    if (tableroRandom[x][y] === tableroRandom[w][z]) {
        return tableroRandom[x][y]
    }
}

//---------------------------------------------------------------------------------------------------
//-----------------FUNCIONES QUE MUESTRAN TABLEROS---------------------------------------------------
//---------------------------------------------------------------------------------------------------


//Creamos una función para generar un array 2D de 4x3 con casillas ocultas y pares adivinados
const obtenerTablero = (elementosAdivinados = [], tableroRandom) => {
    const tableroAMostrar = []
    for (let i = 0; i < tableroRandom.length; i++) {
        for (let j = 0; j < tableroRandom[i].length; j++) {
            if (elementosAdivinados.includes(tableroRandom[i][j])) {
                tableroAMostrar.push(tableroRandom[i][j])
            } else {
                tableroAMostrar.push("📦")          
            }
        }        
    }
    return tableroAMostrar
}

//Creamos una función para copiar el tablero actual, que usaremos para mostrar la jugada ingresada
const copiarTableroActual = (tableroActual) => {
    const copiaTablero = []
    for (let i = 0; i < tableroActual.length; i++) {
        for (let j = 0; j < tableroActual[i].length; j++) {
            copiaTablero.push(tableroActual[i][j])                    
        }
    }
    return copiaTablero
}

//Creamos función para mostrar qué hay en las coordenadas ingresadas
const mostrarJugada = (tableroRandom, copiaTablero, coordenadas) => {
    for (let i = 0; i < coordenadas.length; i++) {
        const x = coordenadas[i][0]
        const y = coordenadas[i][1]
        copiaTablero[x][y] = tableroRandom[x][y]      
    }    
    return copiaTablero
}

//---------------------------------------------------------------------------------------------------
//-----------------PASAR ARRAY 2D A STRING-----------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Creo función para mostrar el array 2D como un tablero ("string")
const array2dAString = (tablero) => {
    let tableroAMostrar = ""
    for (let i = 0; i < tablero.length; i++) {
            tableroAMostrar += tablero[i] + "\n"          
    }
    return tableroAMostrar
}

//---------------------------------------------------------------------------------------------------
//-----------------¿SON IGUALES LOS ELEMENTOS?-------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Crear función para verificar si los elementos son iguales; retorna true/false
const sonIguales = (coordenadas, tableroRandom) => {
    const x = coordenadas[0][0]
    const y = coordenadas[0][1]
    const w = coordenadas[1][0]
    const z = coordenadas[1][1]
        
    return tableroRandom[x][y] === tableroRandom[w][z]
}

//Creo función para verificar si ganó; si el array de elementos adivinados tiene la misma cantidad de elementos que los items originales, ganó.
const verificarSiGano = (elementosAdivinados, items) => elementosAdivinados.length === items.length


//---------------------------------------------------------------------------------------------------
//-------------------------------CREO HISTORIAL DE JUEGO---------------------------------------------
//---------------------------------------------------------------------------------------------------
const obtenerHistorialDeJuego = (ganador, oportunidades) => ganador ? `Partida ganada. Intentos restantes: ${oportunidades}.\n` : `Partida perdida.\n`


//---------------------------------------------------------------------------------------------------
//-------------------------------------------VARIABLES-----------------------------------------------
//---------------------------------------------------------------------------------------------------

keepPlaying = true; //Flag variable

const items = ['🍌', '🍒', '🍄', '🍿', '🍡', '🧁']
// const tableroRandom = obtenerTableroRandom(items)
const tableroRandom = [
    ['🍌', '🍒', '🍌', '🍒'],
    ['🍄', '🍿', '🍄', '🍿'],
    ['🍡', '🧁', '🍡', '🧁']
]
let oportunidades = 10

const elementosAdivinados = [] //Declaro array vacío al que se le van agregando los elementos adivinados. Lo uso para saber si mostrar elementos adivinados en el tableroActual y su length me permite determinar si el usuario encontró todos los pares.

let historialGeneral = ""

//---------------------------------------------------------------------------------------------------
//--------------------------------------------JUEGO--------------------------------------------------
//---------------------------------------------------------------------------------------------------

while (keepPlaying) {
    
    //Llamo función para obtener tablero actual y después otra para transformarlo a string y mostrarlo.
    const tableroActual = array2d(obtenerTablero(elementosAdivinados, tableroRandom))
    const tableroActualParaMostrar = array2dAString(tableroActual)
    
    //Pido ingresar coordenadas en cada vuelta. Muestro tablero actual y oportunidades restantes.
    const jugada = prompt(tableroActualParaMostrar + `Ingresá dos coordenadas. (Ejemplo: 1,1 2,3)\nTe quedan ${oportunidades} oportunidades.`).split(" ")
    //Llamo función para obtener coordenadas en un array.
    const coordenadas = separarCoordenadas(jugada)
    //Llamo función para verificar si los elementos son iguales.
    const elementosIguales = sonIguales(coordenadas, tableroRandom)
    //Si los elementos son iguales, los pusheo a un array de control; si no, resto una oportunidad.
    elementosIguales ? elementosAdivinados.push(obtenerAdivinado(tableroRandom, coordenadas)) : oportunidades--;

    //Llamo función que copia el tablero actual.
    const copiaTablero = array2d(copiarTableroActual(tableroActual))
    //Llamo función para mostrar qué hay en el tablero actual en las coordenadas ingresadas
    const jugadaEnTablero = mostrarJugada(tableroRandom, copiaTablero, coordenadas)
    // Muestro la jugada en un tablero especial creado solo para eso
    alert(array2dAString(jugadaEnTablero) + `${elementosIguales ? "¡Encontraste un par!" : "No son iguales."}`)

    //Juego termina si se queda sin oportunidades o si adivina todos los elementos.
    const juegoTerminado = oportunidades < 0 || verificarSiGano(elementosAdivinados, items)
    if (juegoTerminado) {
        keepPlaying = false
    }    
}

//Llamo función para verificar si ganó (encontrar todos los pares)
const ganador = verificarSiGano(elementosAdivinados, items)
//En función del resultado, se decide qué mostrar.
const resultado = ganador ? `¡Ganaste!` : "Perdiste. Te quedaste sin intentos.";

//Llamo función que genera el historial de la partida; luego lo concateno a un historial general, que es el que se muestra.
const historialDeJuegoUnico = obtenerHistorialDeJuego(ganador, oportunidades)
historialGeneral += historialDeJuegoUnico

alert(resultado + "\nHISTORIAL:\n" + historialGeneral)