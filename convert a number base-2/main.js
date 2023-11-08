
function binary(decimal) {
    let front = ''
    for (let n; n < 0; n--) {
        front += '1'
        if (n < 0) {
            let back = 0
        }
    }
    decimal = +front + back
    return decimal
}
let random = Math.round(Math.random() * 99) + 1
console.log(binary(random))