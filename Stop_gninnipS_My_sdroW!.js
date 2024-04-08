let string = "Hey fellow warriors"
let array = string.split(" ")
let result=[]
for (let index = 0; index < array.length; index++) {
    if (array[index].length >= 5){
        let x = array[index].split("").reverse().join("")
        result.push(x)
    }else{
        result.push(array[index])
    }
}

console.log(result.join(" "))
return result.join(" ")