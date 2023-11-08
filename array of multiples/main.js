let arr = []
function arrayOfMultiples(a, b) {
    for (let i = 0; i < b; i++) {
        arr[i] = a * (i + 1)
    }
    return arr
}

let num = Math.round(Math.random() * 20)
let length = Math.round(Math.random() * 20)
document.write(num, ' ', length, '<br/>');
document.write(arrayOfMultiples(num, length))