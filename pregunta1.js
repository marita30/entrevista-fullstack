
/**
 * 
 * @param {number[]} integers 
 */

const checkIntegers = (n) => {
    return  n % 2 === 0 /* True or false */
}


const findOutlier = (integers) => {
    const pares = []
    const impares = []
    integers.forEach(integer => {
        checkIntegers(integer) ? pares.push(integer) : impares.push(integer)
    })
    return pares.length === 1 ? pares[0] : impares[0]
}


const test1 = [2, 4, 0, 100, 4, 11, 2602, 36]
const test2 = [160, 3, 1719, 19, 11, 13, -21]

console.assert(findOutlier(test1) == 11)
console.assert(findOutlier(test2) == 160)
