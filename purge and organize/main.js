let array = []
let n
let value
n = Math.round(Math.random() * 6) + 5
for (let i = 0; i < n; i++) {
    value = Math.round(Math.random() * 10)
    array[i] = value
}
console.log(array);


function uniqueSort(arr) {
    let unique = []
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i])
        }
    }
    return unique
}
array = uniqueSort(array)
console.log(array);
function compareNumbers(a, b) {
    return a - b
}
console.log(array.sort(compareNumbers))

