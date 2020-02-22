const getPlayerAttackPoints = (playerMaxAttack) => Math.round(Math.random() * playerMaxAttack) + 1;
const getMonsterAttackPoints = (monsterMaxAttack) => Math.round(Math.random() * monsterMaxAttack) + 1;
const getMonsterLifeAfterPlayerAttack = (monsterLife) => monsterLife -= getPlayerAttackPoints(playerMaxAttack);
const getPlayerLifeAfterMonsterAttack = (playerLife) => playerLife -= getMonsterAttackPoints(monsterMaxAttack);

//CREO VARIABLES INICIALES
let playerLife = Math.round(Math.random() * 30) + 70;
let monsterLife = Math.round(Math.random() * 40) + 80;
let potionAmount = Math.round(Math.random() * 4) + 1;
const playerMaxAttack = 30;
let playerAttack = 0;
const monsterMaxAttack = 30;
let monsterAttack = 0;
const potionMaxHealing = 25;
let potionHealing = 0;
let potionSearch = 0;

//FLAG VARIABLE
let keepGoing = true;

//ESTABLEZCO LOOP WHILE QUE DURA MIENTRAS EL MONSTRUO Y LA JUGADORA TENGAN 1 O + DE VIDA, O HASTA QUE SE ESCRIBA "SALIR"
 while(keepGoing) {
    //MUESTRO AL USUARIO LOS VALORES DE JUEGO Y LAS OPCIONES
    const action = prompt(`Vida de jugadora: ${playerLife} \nVida de monstruo: ${monsterLife} \nCantidad de pociones disponibles: ${potionAmount} \n¿Qué vas a hacer? \n--Atacar al monstruo (ATACAR) \n--Tomar una poción (TOMAR) \n--Buscar una poción (BUSCAR) \n--SALIR`)

    //ACCIONES DE LA JUGADORA
    switch (action) {
        case "ATACAR":
            playerAttack = getPlayerAttackPoints(playerMaxAttack)
            monsterLife = getMonsterLifeAfterPlayerAttack(monsterLife)
            monsterLife > 0 ? alert(`Atacaste con ${playerAttack} de fuerza. Ahora el monstruo tiene ${monsterLife} de vida.`) : alert(`Atacaste con ${playerAttack} de fuerza. ¡¡Mataste al monstruo!! Quedaste con ${playerLife} de vida.`);
            break;
        case "TOMAR":
            potionHealing = Math.round(Math.random() * potionMaxHealing) + 1;
            playerLife += potionHealing;
            potionAmount--;
            alert(`Tomaste una poción que te dio ${potionHealing} puntos de salud. Ahora tenés ${playerLife} de vida y ${potionAmount} poción(es).`);
            break;
        case "BUSCAR":
            potionSearch = Math.ceil(Math.random() * 4);
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
        monsterAttack = Math.round(Math.random() * monsterMaxAttack) + 1;
        playerLife -= monsterAttack;
        if (playerLife <= 0) {
            alert(`¡Mala suerte! El monstruo te atacó con ${monsterAttack} de fuerza y te mató. El monstruo quedó con ${monsterLife} de vida.`)
        } else {
            alert(`El monstruo te atacó con ${monsterAttack} de fuerza. Te queda ${playerLife} de vida.`)
        }
    }

    //CONDICIONES PARA TERMINAR EL JUEGO
    if (playerLife <= 0 || monsterLife <= 0 || action === "SALIR") {
        keepGoing = false;
    }
}