let numbers = [1, 2, 3, 4, 5, 6]
let divisor = 3
let result = []

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index]%divisor===0){
        result.push(numbers[index])
    }
}

console.log(result)
return result