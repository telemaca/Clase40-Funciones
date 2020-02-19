/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
//

const removeDuplicates = (arr) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        console.log(newArray.indexOf(arr[i]))
        if (newArray.indexOf(arr[i]) === -1){
            newArray.push(arr[i]);
        }      
    }
    return newArray
}


console.log(removeDuplicates([4, 5, 10, 4, 10, 2]))