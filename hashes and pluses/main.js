let arr = []
let text = "#+++#+#++#"
document.write(text, '<br/>')
function hashPlusCount(string) {
    let hashes = 0
    let pluses = 0
    let splitted = string.split('')
    let i = 0
    while (i < splitted.length) {
        if (splitted[i] == '#') hashes++
        if (splitted[i] == '+') pluses++
        i++
    }
    arr[0] = hashes
    arr[1] = pluses
    return arr
}
document.write(hashPlusCount(text))