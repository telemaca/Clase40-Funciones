//---------------------------------------------------------------------------------------------------
//----------------------OBTENER TABLERO RANDOM-------------------------------------------------------
//---------------------------------------------------------------------------------------------------

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
    const itemsRandoms = randomizarItems(items)
    const tablero = array2d(itemsRandoms)

    return tablero
}





//Creo función para hallar las coordenadas actuales del "espacio en blanco"
const hallarCoordenadas = (tablero) => {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === "*") {
                return [i, j]
            }            
        }        
    }
}


//Creo función para copiar el tablero
const copiarTablero = (tablero) => {
    const copiaTablero = []
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            copiaTablero.push(tablero[i][j])                    
        }
    }
    return copiaTablero
}

//Creo función para mover el "espacio en blanco"
const moverElemento = (coordenadas, movimiento, tablero, copiaTablero) => {

    let x = coordenadas[1];
    let y = coordenadas[0];

    switch (movimiento) {
        case "5": //ARRIBA
            if (y === 0){
                alert("No puede realizar ese movimiento");
            } else {
                tablero[y][x] = copiaTablero[y-1][x]
                tablero[y-1][x] = copiaTablero[y][x]
            }
            break;
        case "2": //ABAJO
            if (y === tablero.length - 1){
                alert("No puede realizar ese movimiento");
            } else {
                tablero[y][x] = copiaTablero[y+1][x]
                tablero[y+1][x] = copiaTablero[y][x]
            }
            break;
        case "1": //IZQUIERDA
            if (x === 0){
                alert("No puede realizar ese movimiento");
            } else {
                tablero[y][x] = copiaTablero[y][x-1]
                tablero[y][x-1] = copiaTablero[y][x]
            }
            break;
        case "3": //DERECHA
            if (x === tablero[y].length - 1){
                alert("No puede realizar ese movimiento");
            } else {
                tablero[y][x] = copiaTablero[y][x+1]
                tablero[y][x+1] = copiaTablero[y][x]
            }
            break;
        default:
            alert("No ingresó una palabra válida.")
    }

    return tablero
}

//---------------------------------------------------------------------------------------------------
//-----------------PASAR ARRAY ARRAY 2D A STRING-----------------------------------------------
//---------------------------------------------------------------------------------------------------
const array2dAString = (tablero) => {
    let tableroAMostrar = ""
    for (let i = 0; i < tablero.length; i++) {
            fila = tablero[i].join(" ")
            tableroAMostrar += fila + "\n"          
    }
    return tableroAMostrar
}

//---------------------------------------------------------------------------------------------------
//-----------------¿HAY GANADOR?---------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
const verificarSiGano = (tableroGanador, tablero) => {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] !== tableroGanador[i][j]) {
                return false
            }            
        }        
    }
    return true
}

const tableroGanador = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, "*"]
]

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "*"]
// const tablero = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, "*", 14, 15]
// ]


//FLAG variable
let keepPlaying = true


while (keepPlaying) {

    let terminoJuego = false
    const tablero = obtenerTableroRandom(items)
    const tableroAMostrar = array2dAString(tablero)
    let movimiento = prompt(`${tableroAMostrar} \n5 - ARRIBA \n2 - ABAJO \n1 - IZQUIERDA \n3 - DERECHA`)

    while(!terminoJuego) {
        
        const coordenadas = hallarCoordenadas(tablero)
        const copiaTablero = array2d(copiarTablero(tablero))
        const nuevoTablero = moverElemento(coordenadas, movimiento, tablero, copiaTablero)
        const nuevoTableroString = array2dAString(nuevoTablero)
        const ganador = verificarSiGano(tableroGanador, tablero)
        
        if(ganador) {
            alert("¡Ganaste!")
            terminoJuego = true
        } else {
            movimiento = prompt(`${nuevoTableroString} \n5 - ARRIBA \n2 - ABAJO \n1 - IZQUIERDA \n3 - DERECHA \n9 - SALIR`)
            if (movimiento === "9") {
                terminoJuego = true
            }
        }
    }

    const newGame = confirm(`¿Querés jugar otra vez?`)
    if (!newGame) {
        keepPlaying = false
    }
}

alert(`Gracias por jugar :)`)