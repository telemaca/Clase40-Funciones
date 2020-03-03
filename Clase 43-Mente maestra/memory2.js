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

const items = ['🍌', '🍒', '🍄', '🍿', '🍡', '🧁']
const tableroRandom = obtenerTableroRandom(items)
console.log(tableroRandom)

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------


//Creamos función para crear un array 2D con las coordenadas
const separarCoordenadas = (jugada) => {
    const coordenadasArray = []
    coordenadasArray.push(jugada[0].split(","))
    coordenadasArray.push(jugada[1].split(","))
    return coordenadasArray
}

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Creamos función para crear array con elementos adivinados
const agruparAdivinados = (tableroRandom, coordenadas) => {
    const elementoAdivinadoArray = []
    const x = coordenadas[0][0]
    const y = coordenadas[0][1]
    const w = coordenadas[1][0]
    const z = coordenadas[1][1]

    if (tableroRandom[x][y] === tableroRandom[w][z]) {
        elementoAdivinadoArray.push(tableroRandom[x][y])
    }
   
    return elementoAdivinadoArray
}

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------


//Creamos una función para generar un array 2D de 4x3 con casillas ocultas y pares adivinados
const obtenerTablero = (elementosAdivinados, tablero) => {
    const tableroAMostrar = []
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (elementosAdivinados.includes(tablero[i][j])) {
                tableroAMostrar.push(tablero[i][j])
            } else {
                tableroAMostrar.push("📦")          
            }
        }        
    }
    return tableroAMostrar
}

//Creamos función para mostrar qué hay en las coordenadas ingresadas
const mostrarJugada = (tableroRandom, tableroActual, coordenadas) => {
    const copiaTablero = tableroActual.slice()
    for (let i = 0; i < coordenadas.length; i++) {
        const x = coordenadas[i][0]
        const y = coordenadas[i][1]
        copiaTablero[x][y] = tableroRandom[x][y]      
    }    
    return copiaTablero
}

//Creo función para mostrar el array 2D como un tablero ("string")
const array2dAString = (tableroActual) => {
    const copiaTablero = tableroActual.slice()
    let tableroAMostrar = ""
    for (let i = 0; i < copiaTablero.length; i++) {
            tableroAMostrar += copiaTablero[i] + "\n"          
    }
    return tableroAMostrar
}

//Crear función para verificar si los elementos son iguales; retorna true/false
const verificarPares = (coordenadas, tableroActual) => {
    const x = coordenadas[0][0]
    const y = coordenadas[0][1]
    const w = coordenadas[1][0]
    const z = coordenadas[1][1]
        
    return tableroActual[x][y] === tableroActual[w][z]
}

keepPlaying = true;

while (keepPlaying) {
    
    const jugada = prompt('Ingrese dos coordenadas. (Ejemplo: 1,1 2,3)').split(" ")
    const coordenadas = separarCoordenadas(jugada)
    const elementosAdivinados = agruparAdivinados(tableroRandom, coordenadas)
    const tableroActual = array2d(obtenerTablero(elementosAdivinados, tableroRandom))
    const jugadaEnTablero = mostrarJugada(tableroRandom, tableroActual, coordenadas)
    alert(array2dAString(jugadaEnTablero))
    alert(array2dAString(tableroActual))
}

console.log(coordenadas)
console.log(elementosAdivinados)

console.log(tableroActual)
console.log(jugadaEnTablero)