let arr = []
function numberSplit(a) {
    arr[0] = Math.floor(a / 2)
    arr[1] = a - arr[0]
    return arr
}
let random = Math.round((Math.random() * 41) - 20)
console.log(random);
console.log(numberSplit(random))