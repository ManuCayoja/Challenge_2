let arr = [1,1,3,3,7,2,2,2,2]
let n = 3

let result = []

for (let index = 0; index < arr.length; index++) {
    let cont = 0
    for (let endex = 0; endex < result.length; endex++) {
        if (result[endex] === arr[index]) {
            cont++;
        }
    }
    if (cont < n) {
        result.push(arr[index]);
    }
}
console.log(result)
return result