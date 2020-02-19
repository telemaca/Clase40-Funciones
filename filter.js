/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierta número x dejando sólo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados mayores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
//

const filterNumbersGreaterThan = (numbersToFilter, breakpoint) => {
    numbersGreaterThan = []
    for (let i = 0; i < numbersToFilter.length; i++) {
        if (numbersToFilter[i] > breakpoint) {
            numbersGreaterThan.push(numbersToFilter[i])
        }
    }
    return numbersGreaterThan
}

console.log(filterNumbersGreaterThan([3, 8, 12, 1, 7, 4, 50, 6, 25, 9], 7))

const filterNumbersSmallerThan = (numbersToFilter, breakpoint) => {
    numbersSmallerThan = []
    for (let i = 0; i < numbersToFilter.length; i++) {
        if (numbersToFilter[i] < breakpoint) {
            numbersSmallerThan.push(numbersToFilter[i])
        }
    }
    return numbersSmallerThan
}

console.log(filterNumbersSmallerThan([3, 8, 12, 1, 7, 4, 50, 6, 25, 9], 7))