let a = 0
let b = 1
let c = 0

function fibs (num) {
    let arr = []

    for (let i = 1; i < num; i++) {
        c = a + b
        b = a
        a = c
        arr.push(c)
        console.log(arr)
    }
}

function fibsRec (num) {
    return ( num < 3 ? 1 : fibsRec(num - 2) + fibsRec(num - 1))
}