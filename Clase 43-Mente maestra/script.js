// Necesitamos 5 colores
// Seleccionar al azar 4 de esos colores, sin repetir
// el jugador ingresa una secuencia de colores
// chequeamos que lo ingresado sean colores válidos que estén en el grupo de colores originales
// comparamos la secuencia ingresada con la secuencia aleatoria
// devuelve pistas (bolas negras para posición correcta y blancas color correcto posición incorrecta)
// se guarda el historial en cada vuelta y se muestra
// se sigue jugando hasta terminar las 15 vueltas o hasta adivinar la secuencia

// Crear función que compare ambas secuencias y devuelva un array conteniendo las pistas
const compararSecuencias = (jugada, secuenciaRandom) => {
    const pistas = [];

    for (let i = 0; i < jugada.length; i++) {
        if (jugada[i] === secuenciaRandom[i]) {
            pistas.push("o");
        } else if (secuenciaRandom.includes(jugada[i])) {
            pistas.push("x");
        }

    }

    return pistas.sort();
}

// Crear una función que verifique si todas las pistas son bolas negras
const verificarSiGano = pistas => {
    let aciertos = 0;

    for (let i = 0; i < pistas.length; i++) {
        if (pistas[i] === "o") {
            aciertos++
        }

    }
    return aciertos === 4;
}

// creo función para crear mensaje con historial
const obtenerHistorial = (historialJugadas, historialPistas) => {
    let historial = "";

    for (let i = 0; i < historialJugadas.length; i++) {
        historial += `${historialJugadas[i].join(" ")} / ${historialPistas[i].join(" ")}\n`
    }
    return historial;
}


// Crear una función que seleccione 4 de esos colores al azar
const generarSecuencia = (colores) => {
    const sinRepetir = []
    let random = Math.floor(Math.random() * colores.length)
    sinRepetir.push(colores[random])
    for (let i = 0; sinRepetir.length < 4; i++) {
        random = Math.floor(Math.random() * colores.length)
        if (sinRepetir.indexOf(colores[random]) === -1) {
            sinRepetir.push(colores[random])
        }
    }
    return sinRepetir
}

//crear función que chequea si la jugada ingresada es válida
const esJugadaValida = (colores, jugada) => {
    let palabrasValidas = 0
    for (let i = 0; i < jugada.length; i++) {
        if(colores.includes(jugada[i])) {
            palabrasValidas++
        }        
    }
    return palabrasValidas === 4
}

const obtenerHistorialDeJuego = (vueltas, historialDeJuego, ganador) => historialDeJuego += ganador ? `Partida ganada. Intentos restantes: ${vueltas}.\n` : `Partida perdida.\n`


let historialDeJuego = "";

// Crear un array con 8 colores
const colores = ["rojo", "verde", "azul", "amarillo", "marrón", "lila", "naranja", "violeta"];
// Crear variable bandera
let seguirJugando = true;
// crear variable de vueltas
let vueltas = 15;

let historialGeneral = "";


//Iniciamos bucle general
while (seguirJugando) {
    //variable bandera para el segundo bucle
    let terminarJuego = false;

    //declaro variable de pistas en este scope para poder generar historial después del juego
    let pistas = true;
    
    //Preguntamos cuántos intentos quiere
    vueltas = Number(prompt(`¿Cuántos intentos quiere para adivinar (15 por default)?`))
    
    // crear variable colores random en cada vuelta
    const secuenciaRandom = generarSecuencia(colores);
    console.log(secuenciaRandom)

    // Inciamos bucle particular de UN juego
    while (!terminarJuego) {
        // declaro valor de historiales particulares de cada juego
        const historialJugadas = [];
        const historialPistas = [];

        //en cada vuelta, generamos el historial de jugadas y pistas
        const historial = obtenerHistorial(historialJugadas, historialPistas);

        // Pedirle al usuario que ingrese su secuencia de colores
        const jugada = prompt(`${historial}Ingrese una secuencia separada por un espacio.\nLe quedan ${vueltas} intentos.`).split(" ");

        //llamar función que chequee si jugada ingresada es válida
        const jugadaValida = esJugadaValida(colores, jugada)

        //Si valores ingresados no son correctos, avisa y vuelve a empezar sin sumar
        if (!jugadaValida) {
            alert(`Los valores ingresados no son correctos.`)
        } else {
            // Llamar función que compare
            pistas = compararSecuencias(jugada, secuenciaRandom);
            
            // Crear un array 2D pusheando lo ingresado por el usuario y otro array 2D pusheando la pista
            historialJugadas.push(jugada);
            historialPistas.push(pistas);
            
            // Restarle 1 a las vueltas
            vueltas--;
            
            // verificar si termina el juego (no === 0 porque puede adivinar en el último intento)
            if (vueltas < 0 || verificarSiGano(pistas)) {
                terminarJuego = true;
            }
        }
    }

    // Verifica si los colores ingresados son iguales a secuencia random, incluso en la última vuelta. Si se quedó sin intentos y no adivinó, perdió.
    const ganador = verificarSiGano(pistas)
    const resultado = ganador ? `¡Ganó! La secuencia era: ${secuenciaRandom.join(" ")}.` : "Perdió. Se quedó sin intentos.";

    //Llamar función que agregue el resultado de la partida a un historial general de juego
    const historialDeJuegoUnico = obtenerHistorialDeJuego(vueltas, historialDeJuego, ganador)
    historialGeneral += historialDeJuegoUnico

    //Se pregunta si quiere seguir jugando
    seguirJugando = confirm(resultado + `\n¿Quiere jugar otra vez?\nHISTORIAL:\n` + historialGeneral);
}