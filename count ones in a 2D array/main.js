let arr = []
let rows = Math.round(Math.random() * 4) + 1
let columns = Math.round(Math.random() * 2) + 1
console.log(columns, rows);
for (let i = 0; i < columns; i++) {
    arr[i] = []
    for (let j = 0; j < rows; j++) {
        let random = Math.round(Math.random() * 5)
        arr[i][j] = random
        console.log(arr[i][j])
    }
}
console.log(arr);


function countOnes(array) {
    let counter = 0
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (arr[i][j] == 1) counter++
        }
    }
    return counter
}
console.log('1s count: ', countOnes(arr));