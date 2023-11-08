let arr = []
let n = Math.round(Math.random() * 3) + 2
for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 20)
}
document.write('[', arr, ']', '<br/>')
function isAvgWhole(array) {
    let count = 0
    let s = 0
    for (let i = 0; i < array.length; i++) {
        s += array[i]
        count++
    }
    // console.log(s, ' ', count)
    let bool
    s % count == 0 ? bool = true : bool = false
    return bool
}
document.write(isAvgWhole(arr))