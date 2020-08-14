
/**
 * 
 * @param {number[]} integers 
 */
function findOutlier(integers) {
    const even = n => n % 2 === 0
    const odd = n => n % 2 === 1   
    return integers.slice(0,3).filter(even).length >= 2 
        ? integers.find(odd)
        : integers.find(even) 
}


const test1 = [2, 4, 0, 100, 4, 11, 2602, 36]
const test2 = [160, 3, 1719, 19, 11, 13, -21]

console.assert(findOutlier(test1) == 11)
console.assert(findOutlier(test2) == 160)
