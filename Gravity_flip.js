let d = "L"
let a = [3, 2, 1, 2]

let aux
for (let index = 0; index < a.length; index++) {
    for (let endex = 0; endex < a.length; endex++) {
        if (a[endex]>a[endex+1]){
            aux = a[endex]
            a[endex] = a[endex+1]
            a[endex+1] = aux
        }    
    }
}

if (d === "R"){
    console.log(a)
    return a
} else if (d === "L"){
    b = a.reverse()
    console.log(b)
    return b
}