//para elegir color random
const getRandomColor = (colors) => {
    const i = Math.floor(Math.random() * (colors.length));
    return colors[i]
}

const areColorsEqual = (randomColors, userColors) => randomColors === userColors

const areRoundsCompleted = (round, numberOfRounds) => round === numberOfRounds

//colores predeterminados
let colors = ["amarillo", "azul", "rojo", "verde"]

//FLAG variables
let keepPlaying = true;
let gameLoop = true;
let survivalOn = true;

//otras variables
let randomColor = "";
let userColor = "";
let gamesPlayed = 0;
let gameInfo = "";
let roundInfo = "";
let randomColors = "";
let userColors = "";
let round = 1;
let roundScore = 0;

const modeMessage = `¿Qué modo vas a jugar? CLÁSICO / SUPERVIVENCIA`;
const colorsMessage = `Ingresá al menos cuatro colores nuevos para usar (separados por un espacio):`
const simonMessage = `Simón dice: `;
const losingMessage = `Perdiste. Cantidad máxima de rondas sin perder: `


//pregunto por valores iniciales
let gameMode = prompt(modeMessage)
const changeColors = confirm(`Los colores del juego son "verde", "rojo", "amarillo" y "azul". ¿Quiere cambiarlos?`)
if (changeColors) {
    colors = prompt(colorsMessage).split(" ")
}
console.log(colors)


//WHILE LOOP
while (keepPlaying) {
    //MENU GENERAL DEL JUEGO
    const menu = prompt(`MODO ACTUAL: ${gameMode} \nCOLORES ACTUALES: ${colors.join(" ")} \nPARTIDAS JUGADAS: ${gamesPlayed} \n1.) INICIAR JUEGO \n2.) CAMBIAR MODO \n3.) CAMBIAR COLORES\n4.) VER HISTORIAL DE PARTIDAS \n5.) SALIR`)

    switch (menu) {
        case "1": //inicia el juego 
            switch (gameMode) { //según el modo que se haya elegido
                case "CLASICO": 
                    //PREGUNTO CUANTAS RONDAS QUIERE JUGAR
                    const numberOfRounds = Number(prompt(`¿Cuántas rondas querés jugar?`))

                    // variables que se actualizan en cada juego nuevo
                    randomColors = ""
                    userColors = ""
                    round = 1;
                    roundScore = 0;

                    for (let i = 0; i < numberOfRounds; i++) { //                  
                        randomColor = getRandomColor(colors) //color aleatorio que elige el programa
                        randomColors += randomColor + " " //se suman los colores en cada vuelta
                        
                        alert(simonMessage + randomColors)
                        
                        //COLORES QUE INGRESA USUARIO
                        for (x = 1; x <= round; x++) {
                            userColor = prompt(`Ingresá el color ${x}:`)
                        }

                        userColors += userColor + " " //sumo colores que ingresa el usuario
                        
                        //COMPARA COLORES INGRESADOS CON LOS ORIGINALES:
                        
                        //PASA A SIGUIENTE RONDA
                        if (areColorsEqual(randomColors, userColors)) {
                            roundScore++
                        }
                        //PIERDE Y SE TERMINA
                        else {
                            alert(losingMessage + roundScore)
                            roundInfo = `MODO CLASICO: ${roundScore} rondas. ${colors.length} colores. Derrota en ronda ${round}.\n`
                            gameInfo += roundInfo
                        }
                        
                        const winner = areColorsEqual(randomColors, userColors) && areRoundsCompleted(round, numberOfRounds)

                        //GANADOR
                        if (winner) {
                            alert(`¡Ganaste! ${roundScore} rondas sin perder.`)
                            roundInfo = `MODO CLASICO: ${roundScore} rondas. ${colors.length} colores. Partida ganada.\n`
                            gameInfo += roundInfo //sumo info del juego para mostrar
                        }

                        round++
                    }
                    gamesPlayed++
                    break;
                    
                case "SUPERVIVENCIA": 
                    while (survivalOn) {
                        randomColor = getRandomColor(colors) // color aleatorio que elige el programa
                        randomColors += randomColor + " " // se suman los colores en cada vuelta
                        
                        alert(simonMessage + randomColors)
                        
                        for (x = 1; x <= round; x++) {
                            userColor = prompt(`Ingresá el color ${x}:`)
                        } // COLORES QUE INGRESA EL USUARIO--se agrega 1 color por ronda

                        userColors += userColor + " " // sumo colores que ingresa el usuario
                        
                        areColorsEqual(randomColors, userColors) ? roundScore++ : survivalOn = false;
                        // si los colores son iguales, suma 1 punto y sigue; si se equivoca, termina el juego

                        round++ //sumo una ronda para saber cuántos colores deben aparecer en la ronda siguiente
                    }

                    alert(losingMessage + roundScore)
                    roundInfo = `MODO SUPERVIVENCIA: ${colors.length} colores. ${roundScore} rondas ganadas.\n`
                    gameInfo += roundInfo //sumo info del juego para mostrar
                    gamesPlayed++
                    break;

                default:
                    alert(`No ingresaste una opción válida.`)
                    break;
            }

            break;
        case "2":
            gameMode = prompt(modeMessage)
            break;
        case "3":
            colors = prompt(colorsMessage).split(" ")
            console.log(colors)
            break;
        case "4":
            alert(gameInfo)
            break;
        case "5":
            alert(`Gracias por jugar.`)
            keepPlaying = false;
            break;
        default:
            alert(`No ingresaste una opción válida.`)
    }
}