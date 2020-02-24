const isSnakeOnTop = (board, coordinateXSnake) => board[0][coordinateXSnake] === "🐍" && board[board.length - 1][coordinateXSnake] !== "🧱";

const isSnakeOnRightEnd = (board, coordinateYSnake) => board[coordinateYSnake][board[coordinateYSnake].length-1] === "🐍" && board[coordinateYSnake][0] !== "🧱";

const isSnakeOnTheBottom = (board, coordinateXSnake) => board[board.length-1][coordinateXSnake] === "🐍" && board[0][coordinateXSnake] !== "🧱";

const isSnakeOnLeftEnd = (board, coordinateYSnake) => board[coordinateYSnake][0] === "🐍" && board[coordinateYSnake][board[coordinateYSnake].length - 1] !== "🧱";

const isMovePossible = (direction, board, coordinateYSnake, coordinateXSnake) => {
    if ((direction === "ARRIBA" && board[coordinateYSnake-1] !== undefined && board[coordinateYSnake-1][coordinateXSnake] !== "🧱") ||
    (direction === "DERECHA" && board[coordinateYSnake][coordinateXSnake+1] !== undefined && board[coordinateYSnake][coordinateXSnake+1] !== "🧱") ||
    (direction === "ABAJO" && board[coordinateYSnake+1] !== undefined && board[coordinateYSnake+1][coordinateXSnake] !== "🧱") ||
    (direction === "IZQUIERDA" && board[coordinateYSnake][coordinateXSnake-1] !== undefined && board[coordinateYSnake][coordinateXSnake-1] !== "🧱")) {
        return true
    }
}
//FUNCIÓN PARA CONTAR CUÁNTAS MANZANAS QUEDAN
const countApples = (board) => {
    let apples = 0;
    for (let i = 0; i< board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '🍎')
            apples++
        }
    }
    return apples
}
//FUNCIÓN PARA MOSTRAR EL TABLERO ACTUALIZADO
const showUpdatedBoard = (board) => {
    let boardToShow = ""
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            boardToShow += board[i][j]            
        }        
        boardToShow += "\n"
    }
    return boardToShow
}
//FUNCION PARA HALLAR LAS COORDENADAS
const findCoordinates = (board) => {
    for (let i = 0; i< board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '🐍') {
                return [i, j];
            }
        }
    }
}


//TABLERO INICIAL, QUE SE VA ACTUALIZANDO
const board = 
[
    ['🍎', '🧱', '🌱', '🧱', '🍎', '🌱', '🌱'],
    ['🌱', '🌱', '🍎', '🌱', '🌱', '🌱', '🍎'],
    ['🍎', '🧱', '🌱', '🧱', '🍎', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱', '🌱', '🧱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱', '🍎', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱', '🌱', '🌱'], 
    ['🌱', '🧱', '🌱', '🧱', '🍎', '🌱', '🧱'],   
]

// MENSAJE QUE SE REPITE
const message = `\n¿ARRIBA, DERECHA, ABAJO, IZQUIERDA?`

//FLAG VARIABLE
let keepPlaying = true;

//SE JUEGA MIENTRAS HAYA MANZANAS POR COMER
while (keepPlaying) {
    //CUENTO EN CADA VUELTA DEL LOOP CUÁNTAS MANZANAS QUEDAN
    const applesLeft = countApples(board);
    
    //MUESTRO EL TABLERO EN CADA VUELTA
    const boardToShow = showUpdatedBoard(board);

    //DETERMINO X Y Y DE VIBORITA
    const coordinates = findCoordinates(board)
    const coordinateXSnake = coordinates[0]
    const coordinateYSnake = coordinates[1]
      
    if (applesLeft > 0) {
        const direction = prompt(boardToShow + message)
        const possibleMove = isMovePossible(direction, board, coordinateYSnake, coordinateXSnake)

        switch (direction) {
            case "ARRIBA":
                if (isSnakeOnTop(board, coordinateXSnake)) {
                    //VIBORITA ESTÁ EN EL EXTREMO SUPERIOR Y PASA AL INFERIOR
                    board[board.length - 1][coordinateXSnake] = "🐍"            
                    board[0][coordinateXSnake] = "🌱"
                } else if (possibleMove) {
                    //VIBORITA SUBE SI NO HAY LADRILLO
                    board[coordinateYSnake][coordinateXSnake] = "🌱"
                    board[coordinateYSnake-1][coordinateXSnake] = "🐍"
                } else {
                    alert(boardToShow + `Camino bloqueado`)
                }
                break;

            case "DERECHA":
                if (isSnakeOnRightEnd(board, coordinateYSnake)) {
                    //VIBORITA ESTÁ EN EL EXTREMO DERECHO Y PASA AL IZQUIERDO
                    board[coordinateYSnake][0] = "🐍"            
                    board[coordinateYSnake][board[coordinateYSnake].length - 1] = "🌱"
                } else if (possibleMove) {
                    //VIBORITA VA A LA DERECHA SI NO HAY LADRILLO
                    board[coordinateYSnake][coordinateXSnake+1] = "🐍"            
                    board[coordinateYSnake][coordinateXSnake] = "🌱" 
                } else {
                    alert(boardToShow + `Camino bloqueado`)
                }
                break;

            case "ABAJO":
                if (isSnakeOnTheBottom(board, coordinateXSnake)) {
                    //VIBORITA ESTÁ EN EL EXTREMO INFERIOR Y PASA AL SUPERIOR
                    board[0][coordinateXSnake] = "🐍"            
                    board[board.length-1][coordinateXSnake] = "🌱"
                } else if (possibleMove) {
                    //VIBORITA BAJA SI NO HAY LADRILLO
                    board[coordinateYSnake+1][coordinateXSnake] = "🐍"            
                    board[coordinateYSnake][coordinateXSnake] = "🌱"
                } else {
                    alert(boardToShow + `Camino bloqueado`)
                }
                break;

            case "IZQUIERDA":
                if (isSnakeOnLeftEnd(board, coordinateYSnake)) {
                    //VIBORITA ESTÁ EN EL EXTREMO IZQUIERDO Y PASA AL DERECHO
                    board[coordinateYSnake][0] = "🌱"            
                    board[coordinateYSnake][board[coordinateYSnake].length - 1] = "🐍"
                } else if (possibleMove) {
                    //VIBORITA VA A LA IZQUIERDA SI NO HAY LADRILLO
                    board[coordinateYSnake][coordinateXSnake] = "🌱"
                    board[coordinateYSnake][coordinateXSnake-1] = "🐍"            
                } else {
                    alert(boardToShow + `Camino bloqueado`)
                }
                break;
            //PALABRA CLAVE QUE USO PARA SALIR DEL PROGRAMA
            case "A":
                keepPlaying = false;
                break;
        }
    } else {
        //CANTIDAD DE MANZANAS ES = 0: NO SE JUEGA MÁS.
        alert(boardToShow + `¡¡Te comiste todas las manzanas!!`)
        keepPlaying = false;
    }
}