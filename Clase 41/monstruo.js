const getRandom = (x) => Math.round(Math.random() * x) + 1;
const getPotionSearchResult = () => Math.ceil(Math.random() * 4);
const endGame = (playerLife, monsterLife, action) => playerLife <= 0 || monsterLife <= 0 || action === "SALIR";

//CREO VARIABLES INICIALES
let playerLife = Math.round(Math.random() * 30) + 70;
let monsterLife = Math.round(Math.random() * 40) + 80;
let potionAmount = Math.round(Math.random() * 4) + 1;
const playerMaxAttack = 35;
const monsterMaxAttack = 30;
const potionMaxHealing = 25;

//FLAG VARIABLE
let keepGoing = true;

//ESTABLEZCO LOOP WHILE QUE DURA MIENTRAS EL MONSTRUO Y LA JUGADORA TENGAN 1 O + DE VIDA, O HASTA QUE SE ESCRIBA "SALIR"
 while(keepGoing) {
    //MUESTRO AL USUARIO LOS VALORES DE JUEGO Y LAS OPCIONES
    const action = prompt(`Vida de jugadora: ${playerLife} \nVida de monstruo: ${monsterLife} \nPociones disponibles: ${potionAmount} \n¿Qué vas a hacer? \n--Atacar al monstruo (ATACAR) \n--Tomar una poción (TOMAR) \n--Buscar una poción (chance de 25% de encontrar una) (BUSCAR) \n--SALIR`)

    //ACCIONES DE LA JUGADORA
    switch (action) {
        case "ATACAR":
            const playerAttack = getRandom(playerMaxAttack)
            monsterLife -= playerAttack
            
            const mensaje = monsterLife > 0 ? `Atacaste con ${playerAttack} de fuerza. Ahora el monstruo tiene ${monsterLife} de vida.` : `Atacaste con ${playerAttack} de fuerza. ¡¡Mataste al monstruo!! Quedaste con ${playerLife} de vida.`;

            alert(mensaje)
            break;
        case "TOMAR":
            if (potionAmount === 0) {
                alert(`¡No te quedan pociones! Podés probar con buscar una, pero igual perdiste el turno por distraídx.`)
            } else {
                const potionHealingPoints = getRandom(potionMaxHealing)
                playerLife += potionHealingPoints;
                potionAmount--;
                alert(`Tomaste una poción que te dio ${potionHealingPoints} puntos de salud. Ahora tenés ${playerLife} de vida y ${potionAmount} poción(es).`);
            }
            break;
        case "BUSCAR":
            const potionSearch = getPotionSearchResult()
            if (potionSearch === 1) {
                potionAmount++;
                alert(`¡Encontraste una poción! Ahora tenés ${potionAmount} poción(es).`);
            } else {
                alert(`No encontraste ninguna poción.`);
            }
            break;
        default:
            alert(`Vida de jugadora: ${playerLife} \nVida de monstruo: ${monsterLife} \nGracias por jugar. ¡Adiós!`)
    }

    //ATAQUE DEL MONSTRUO
    if (monsterLife > 0 && action !== "SALIR") {
        const monsterAttack = getRandom(monsterMaxAttack)
        playerLife -= monsterAttack;

        const mensaje = playerLife <= 0 ? `¡Mala suerte! El monstruo te atacó con ${monsterAttack} de fuerza y te mató. El monstruo quedó con ${monsterLife} de vida.` : `El monstruo te atacó con ${monsterAttack} de fuerza. Te queda ${playerLife} de vida.`

        alert(mensaje)
    }

    //CONDICIONES PARA TERMINAR EL JUEGO
    if (endGame(playerLife, monsterLife, action)) {
        keepGoing = false;
    }
}