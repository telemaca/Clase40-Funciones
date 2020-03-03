// Juego de la Memoria
// Replicar el juego de la memoria. El juego consiste en cartas o items ocultos dispuestos en una grilla 2d al azar. Por turno, la jugadora ingresa las coordenadas de dos items a descubrir. Esos items se muestran, si son iguales quedan descubiertos, sino se vuelven a ocultar (por lo tanto todo item tiene su par),y se pierde un intento. El juego termina cuando se descubren todos los items o se quedan sin intentos (5 por defecto).
// Se debe validar la jugada para ver si es una casilla válida, si no lo es aviasr y no contarlo como intento
// Se deben usar las coordenadas pidiendo (X, Y), y teniendo el punto de origen (1,1) abaja a la izquierda (3,2 significa 3er ítem a la derecha y 2do hacia arriba)
// Ejemplo:

// 📦📦📦📦
// 📦📦📦📦
// 📦📦📦📦

// // Ingrese coordenadas de 2 items a descubrir: 1,1 | 3,2

// 📦📦📦📦
// 📦📦🔮📦
// 🔥📦📦📦

// // Ha errado

// 📦📦📦📦
// 📦📦📦📦
// 📦📦📦📦

// // Ingrese coordenadas de 2 items a descubrir: 1,1 | 2,3

// 📦🔥📦📦
// 📦📦📦📦
// 🔥📦📦📦

// // Ha acertado

// 📦🔥📦📦
// 📦📦📦📦
// 🔥📦📦📦

// // Ingrese coordenadas de 2 items a descubrir: ...
// OPCIONAL: Para agregar complejidad
// Permitir definir con dimensión de tablero se desea jugar (puede haber dos o tres opciones, la cantidad de ítems tiene que ser par y debe haber la suficiente cantidad de ítems para utilizar)
// Permitir definir cuántos intentos se desea hacer (por default es 5)
// Permitir seguir jugando una vez terminado
// Llevar un historial de partidas jugadas (con cuantos intentos se hizo, con qué tablero y si se ganó o no)

//Tenemos 12 elementos (6 iguales) que se disponen al azar en cada juego
//Se muestra un tablero con casillas ocultas
//La casilla de abajo a la izquierda es 1,1. Es decir que 3,2 es "3 a la derecha, 2 arriba"
//Se pide a jugadorx que ingrese 2 coordenadas
//Se chequea si la jugada es válida
//Se muestran esos dos elementos
//Si los elementos son iguales, quedan descubiertos
//Si no son iguales, se vuelven a tapar y se resta 1 intento (5 por default)
//El juego termina cuando se descubren todos los elementos

//---------------------------------------------------------------------------------------------------
//----------------------OBTENER TABLERO RANDOM-------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Creamos función para duplicar items
const duplicarElementos = (items) => {
  const duplicados = []
  let i = 0;
  while(duplicados.length < items.length * 2) {
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
    
    while(indicesRnd.length < items.length) {
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
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

//Creamos función para crear un array 2D con las coordenadas
const separarCoordenadas = (jugada) => {
    const coordenadasArray = []
    coordenadasArray.push(jugada[0].split(","))
    coordenadasArray.push(jugada[1].split(","))
    return coordenadasArray
}

// const ocultarTablero = (copiaTablero) => {
//     for (let i = 0; i < copiaTablero.length; i++) {
//         for (let j = 0; j < copiaTablero[i].length; j++) {
//             copiaTablero[i][j] = "📦"         
//         }      
//     }
//     return copiaTablero
// }


//Creamos una función para generar un array 2D de 4x3 con casillas ocultas y pares adivinados
const obtenerTablero = (copiaTablero, elementosAdivinados) => {
    for (let i = 0; i < copiaTablero.length; i++) {
        for (let j = 0; j < copiaTablero[i].length; j++) {
            if (elementosAdivinados.includes(copiaTablero[i][j])) {
                copiaTablero[i][j] = copiaTablero[i][j]
            } else {
                copiaTablero[i][j] = "📦"          
            }
        }        
    }
    return copiaTablero
}

//Creamos función para MOSTRAR el tablero 2D como un string/tablero
const array2dAString = (tableroActual) => {
    let tableroAMostrar = ""
    for (let i = 0; i < tableroActual.length; i++) {
        for (let j = 0; j < tableroActual[i].length; j++) {
            tableroAMostrar += tableroActual[i][j]            
        }        
        tableroAMostrar += "\n"
    }
    return tableroAMostrar
}


//Creamos función para mostrar qué hay en las coordenadas ingresadas
const mostrarJugada = (tableroRandom, tableroActual, coordenadas) => {
    for (let i = 0; i < coordenadas.length; i++) {
        const x = coordenadas[i][0]
        const y = coordenadas[i][1]
        tableroActual[x][y] = tableroRandom[x][y]      
    }    
    return tableroActual
}


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


const verificarPares = (coordenadas, tableroActual) => {
    const x = coordenadas[0][0]
    const y = coordenadas[0][1]
    const w = coordenadas[1][0]
    const z = coordenadas[1][1]
        
    return tableroActual[x][y] === tableroActual[w][z]
}


//Tenemos un array con 6 pares de elementos
const items = ['🍌', '🍒', '🍄', '🍿', '🍡', '🧁']

// const coordenadasReales = transformarCoordenadas(jugada)


let terminarJuego = false;

//Iniciamos bucle de juego
// while (!terminarJuego) {
    //Le pedimos a lx jugadorx que ingrese 2 coordenadas (ejemplo: 1,1 2,3)
    const jugada = prompt('\nIngrese dos coordenadas. (Ejemplo: 1,1 2,3)').split(" ")
    const coordenadas = separarCoordenadas(jugada)
    const tableroRandom = obtenerTableroRandom(items)
    const elementosAdivinados = agruparAdivinados(tableroRandom, coordenadas)
    const copiaTablero = tableroRandom
    const tableroActual = obtenerTablero(copiaTablero, elementosAdivinados)
    const tableroActual2d = array2d(tableroActual)
    const tableroYJugada = mostrarJugada(tableroRandom, tableroActual2d, coordenadas)


    //Llamamos una función para mostrar esa jugada
    alert(array2dAString(tableroYJugada))
    console.log(agruparAdivinados(tableroRandom, coordenadas))
    console.log(tableroActual)
    alert(array2dAString(tableroActual2d))

    // if(verificarPares()) {
        
    // } else {

    // }

    console.log(tableroActual2d)
    console.log(verificarPares(coordenadas, tableroActual))
    //Llamo función para obtener las coordenadas reales del tablero
    // const nuevasCoordenadas = transformarCoordenadas(jugada)
    
    //Creamos una función para verificar que las coordenadas formen parte del tablero
    //Si alguna no es válida, avisamos y no pierde turno. Ingresa de nuevo.
    //Llamar función que muestra tablero oculto y esas dos fichas

    //Si las fichas son iguales, se quedan. 
    //Si las fichas no son iguales, se vuelven a ocultar. 
    //Resto 1 intento si fichas no son iguales.
    //Si adivina todas las fichas || intentos < 0 => se termina el juego.
    if(jugada===["a"]){
        terminarJuego = true;
    }
// }

















// const determinarCoordenadas = (jugada) => {
//     let coordenadas = separarCoordenadas(jugada)
//     for (let i = 0; i < coo.length; i++) {
//         const element = coo[i];
        
//     }
//     const x = [coordenadas[0][0]]
//     const y = [coordenadas[0][1]]
//     return [x, y]
// }


// const transformarCoordenadas = (jugada) => {
//     const coordenadasArray = separarCoordenadas(jugada)
//     for (let i = 0; i < coordenadasArray.length; i++) {
//         if (coordenadasArray[i][1] == 1){
//             coordenadasArray[i][0] = 2
//         } else if (coordenadasArray[i][1] == 2){
//             coordenadasArray[i][0] = 1
//         } else if (coordenadasArray[i][1] == 3){
//             coordenadasArray[i][0] = 0
//         } 
//         if (coordenadasArray[i][0] == 1){
//             coordenadasArray[i][1] = 0
//         } else if (coordenadasArray[i][0] == 2){
//             coordenadasArray[i][1] = 1
//         } else if (coordenadasArray[i][0] == 3){
//             coordenadasArray[i][1] = 2
//         } else if (coordenadasArray[i][0] == 4){
//             coordenadasArray[i][1] = 3
//         }
//     }
//     return coordenadasArray
// }




// const obtenerTableroActual = (tablero, ocultarBombas = true) => {
//     let tableroActual = '';
    
//     for (let i = 0; i < tablero.length; i++) {
//         for (let j = 0; j < tablero[i].length; j++) {
//             if (ocultarBombas && tablero[i][j] === '💣') {
//                 tableroActual += '📦';
//             } else {
//                 tableroActual += tablero[i][j];
//             }
//         }
//         tableroActual += '\n';
//     }  
    
//     return tableroActual;
// }