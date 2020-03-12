// 4 en línea
// Replicar el juego de 4 en línea. El juego consiste en ir ingresando en cada turno una ficha en una columna, en un tablero de 7x6. Se juega de a dos, cada jugadora tiene fichas de color distinto al de su rival. El juego se gana cuando se forma 4 en línea, ya sea horizontal, vertical o en diagonal. Ejemplo:
// ⚪️⚪️⚪️⚪️⚪️⚪️⚪️
// ⚪️⚪️⚪️⚪️⚪️⚪️⚪️
// ⚪️⚪️⚪️⚪️⚪️⚪️⚪️
// ⚪️⚪️🔴🔴⚪️⚪️⚪️
// ⚪️🟢🟢🟢🔴⚪️⚪️
// ⚪️🔴🔴🟢🟢🔴⚪️

// Turno de jugadora verde, ingrese columna: 7

// ⚪️⚪️⚪️⚪️⚪️⚪️⚪️
// ⚪️⚪️⚪️⚪️⚪️⚪️⚪️
// ⚪️⚪️⚪️⚪️⚪️⚪️⚪️
// ⚪️⚪️🔴🔴⚪️⚪️⚪️
// ⚪️🟢🟢🟢🔴⚪️⚪️
// ⚪️🔴🔴🟢🟢🔴🟢
// OPCIONAL: Para agregar complejidad
// Permitir usar nombres de jugadoras y poder cambiarlo
// Permitir seguir jugando una vez terminado
// Llevar un historial de partidas jugadas (quién ganó y quién perdió)


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

const mostrarFicha = (tablero, jugada, ficha) => {
    for (let i = tablero.length - 1; i >= 0; i--) {
        if(tablero[i][jugada-1] === "⚪️") {
            tablero[i][jugada-1] = ficha
            return tablero
        }        
    }
}

const verificarSiGano = (tablero, ficha) => {
    for (let i = tablero.length - 1; i >= 0; i--) {
        for (let j = 0; j < tablero[i].length; j++) {
            if ((tablero[i][j] === ficha && tablero[i][j+1] === ficha && tablero[i][j+2] === ficha && tablero[i][j+3] === ficha) || 
            (tablero[i][j] === ficha && tablero[i-1][j] === ficha && tablero[i-2][j] === ficha && tablero[i-3][j] === ficha) ||
            (tablero[i][j] === ficha && tablero[i-1][j+1] === ficha && tablero[i-2][j+2] === ficha && tablero[i-3][j+3] === ficha) ||
            (tablero[i][j] === ficha && tablero[i-1][j-1] === ficha && tablero[i-2][j-2] === ficha && tablero[i-3][j-3] === ficha)
            ) {
                return true
            }
        }        
    }
}


const tableroInicial = [
    ["⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️"],
    ["⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️"],
    ["⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️"],
    ["⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️"],
    ["⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️"],
    ["⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️", "⚪️"] 
]

let seguirJugando = true

alert(`4 EN LÍNEA\n------------------\n${array2dAString(tableroInicial)}`)

const ficha1 = "🔴"
const ficha2 = "🟢"

while(seguirJugando) {

    const jugada1 = Number(prompt(`Jugadora 1, ¿en qué columna tirás tu ficha?`))
    let tableroConFichas = mostrarFicha(tableroInicial, jugada1, ficha1)
    alert(array2dAString(tableroConFichas))
    const ganadora1 = verificarSiGano(tableroConFichas, ficha1)
    if (ganadora1) {
        alert(`Ganó la jugadora 1.`)
        seguirJugando = false
    } else {

        const jugada2 = Number(prompt(`Jugadora 2, ¿en qué columna tirás tu ficha?`))
        tableroConFichas = mostrarFicha(tableroInicial, jugada2, ficha2)
        alert(array2dAString(tableroConFichas))
        const ganadora2 = verificarSiGano(tableroConFichas, ficha2)
        if (ganadora2) {
            alert(`Ganó la jugadora 2.`)
            seguirJugando = false
        }
    }
}