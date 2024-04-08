let str = "Convert-string-to-camel-case"
let array = str.split("") 

for (let index = 0; index < array.length; index++) {
    if (array[index]=="-" || array[index]=="_"){
        array[index] = " "
    }
}
let arrayC = array.join("").split(" ")

let ok = [arrayC[0].toLowerCase()]
for (let index = 1; index < arrayC.length; index++) {
    arrayC[index] = arrayC[index].charAt(0).toUpperCase() + arrayC[index].slice(1)
    ok.push(arrayC[index])
}

result = ok.join("")
console.log(result)
return result