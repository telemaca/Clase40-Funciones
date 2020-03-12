const createUser = (userID, userName, userPhone, userMail, users) => {
    const newUser = [];
    newUser.push(userID, userName, userPhone, userMail);
    return users.push(newUser)
}

const listUsers = (users) => {
    let usersList = "";
    for (let i = 0; i < users.length; i++) {
        const userData = `ID: ${users[i][0]} / Nombre: ${users[i][1]} / Teléfono: ${users[i][2]} / Mail: ${users[i][3]}`
        usersList += userData + "\n"
    }
    return usersList
}

const userExists = (users, idToChangeOrDelete) => users[idToChangeOrDelete] !== undefined

// const stopAction = () => actionBeingPerformed = false

const changeUserName = (users, idToChangeOrDelete, newUserName) => users[idToChangeOrDelete][1] = newUserName
const changeUserPhone = (users, idToChangeOrDelete, newUserPhone) => users[idToChangeOrDelete][1] = newUserPhone
const changeUserMail = (users, idToChangeOrDelete, newUserMail) => users[idToChangeOrDelete][1] = newUserMail



const users =
    [
        [0, "Carla", "1545628984", "carla@gmail.com"],
        [1, "Pedro", "1545251245", "pedro@gmail.com"],
        [2, "Lucas", "1523357849", "lucas@gmail.com"],
        [3, "Ana", "15789456", "ana@gmail.com"]
    ];

//FLAG VARIABLES
let keepGoing = true;
let userCreation = true;
let tryAgain = true;

let userID = users.length;
let arrayIndex = 0;
let idToChangeOrDelete = 0


// let userData = ""
// let usersList = ""


const confirmMessage = `¿Desea confirmar la operación?`
const cancelMessage = `La operación fue cancelada.\n¿Quiere volver a ingresar los datos?`;
const errorMessage = `No ingresó una opción válida.`;
const nonExistentUserMessage = `El usuario no existe.\n¿Quiere hacer otra búsqueda?`


while (keepGoing) {
    let actionBeingPerformed = true;
    const actionToPerform = prompt(`¿Qué desea hacer?\n- 👤 Crear un usuario (CREAR)\n- 🔎 Buscar un usuario (BUSCAR)\n- 📄 Listar los usuarios (LISTAR)\n- ✏️ Modificar un usuario (MODIFICAR)\n- 🗑️ Eliminar un usuario (ELIMINAR)\n- 🚪 Salir del programa (SALIR)`);

    switch (actionToPerform) {
        case "CREAR":
            while (actionBeingPerformed) {
                const userName = prompt(`Ingrese el nombre`);
                const userPhone = prompt(`Ingrese el teléfono`);
                const userMail = prompt(`Ingrese el mail`);
                const confirmUserCreation = confirm(`Los datos son:\n- Nombre: ${userName}\n- Teléfono: ${userPhone}\n- Mail: ${userMail}\n` + confirmMessage);
                if (confirmUserCreation) {
                    createUser(userID, userName, userPhone, userMail, users)
                    userID++;
                    actionBeingPerformed = false;
                } else {
                    tryAgain = confirm(cancelMessage)
                    if (!tryAgain) {
                        actionBeingPerformed = false;
                    }
                }
            }
            break;

        case "BUSCAR":
            let existentUser = true;
            while (actionBeingPerformed) {
                const typeOfDataToSearch = prompt(`¿Qué desea buscar: id, nombre, teléfono o mail?`);
                switch (typeOfDataToSearch) {
                    case "id":
                    case "nombre":
                    case "teléfono":
                    case "mail":
                        const infoToSearch = prompt(`Ingrese el ${typeOfDataToSearch} que quiere buscar:`);
                        existentUser = false;
                        for (let i = 0; i < users.length; i++) {
                            for (let j = 0; j < users[i].length; j++) {
                                if (users[i][j] == infoToSearch) {
                                    arrayIndex = i;
                                    existentUser = true;
                                    actionBeingPerformed = false;
                                }
                            }
                        }

                        if (existentUser) {
                            alert(users[arrayIndex].join("\n"))
                        } else {
                            tryAgain = confirm(nonExistentUserMessage)
                            if (!tryAgain) {
                                actionBeingPerformed = false;
                            }
                        }
                        break;
                    default:
                        alert(errorMessage)
                }
            }
            break;

        case "LISTAR":
            alert(listUsers(users))
            break;

        case "MODIFICAR":
            while (actionBeingPerformed) {
                idToChangeOrDelete = Number(prompt(`Ingrese el ID del usuario que quiere modificar:`))
                if (userExists(users, idToChangeOrDelete)) {
                    const newUserName = prompt(`Ingrese el nombre`);
                    const newUserPhone = prompt(`Ingrese el teléfono`);
                    const newUserMail = prompt(`Ingrese el mail`);
                    const confirmUserModification = confirm(`Los datos son:\n- Nombre: ${newUserName}\n- Teléfono: ${newUserPhone}\n- Mail: ${newUserMail}\n`+ confirmMessage);
                    if (confirmUserModification) {
                        changeUserName(users, idToChangeOrDelete, newUserName)
                        changeUserPhone(users, idToChangeOrDelete, newUserPhone)
                        changeUserMail(users, idToChangeOrDelete, newUserMail)
                        alert(`La operación se realizó exitosamente.`)
                        actionBeingPerformed = false;
                    } else {
                        tryAgain = confirm(cancelMessage)
                        if (!tryAgain) {
                            actionBeingPerformed = false;
                        }
                    }
                } else {
                    tryAgain = confirm(nonExistentUserMessage)
                    if (!tryAgain) {
                        actionBeingPerformed = false;
                    }
                }
            }
            break;

        case "ELIMINAR":
            while (actionBeingPerformed) {
                idToChangeOrDelete = Number(prompt(`Ingrese el id del usuario que quiere eliminar:`))
                if (userExists(users, idToChangeOrDelete)) {
                    const confirmUserDeletion = confirm(`El usuario que desea eliminar es: \n--Nombre: ${users[idToChangeOrDelete][1]} \n--Teléfono: ${users[idToChangeOrDelete][2]} \n--Mail: ${users[idToChangeOrDelete][3]}\n` + confirmMessage)
                    if (confirmUserDeletion) {
                        users.splice(idToChangeOrDelete, 1)
                        actionBeingPerformed = false;
                    } else {
                        tryAgain = confirm(cancelMessage)
                        if (!tryAgain) {
                            actionBeingPerformed = false;
                        }
                    }
                } else {
                    tryAgain = confirm(nonExistentUserMessage)
                    if (!tryAgain) {
                        actionBeingPerformed = false;
                    }
                }
            }
            break;

        case "SALIR":
            reallyGoing = confirm(confirmMessage);
            if (reallyGoing) {
                alert(`Gracias por trabajar con nosotros. ¡Adiós!`)
                keepGoing = false;
            }
            break;
        case "A":
            keepGoing = false;
            break;
        default:
            alert(errorMessage)
    }
}