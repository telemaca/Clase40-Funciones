/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */
//

const getFileExtension = (file) => {
    let fileDivided = file.split(".") 
    return fileDivided[1]
}

console.log(getFileExtension("libro.pdf"))