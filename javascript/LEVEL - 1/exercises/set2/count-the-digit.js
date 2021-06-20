const count = function(num){
    num = String(num)
    let sum= 0
    for(let i=0; i<num.length; i++){
        sum = sum + parseInt(num[i])
    }
    return sum
}

console.log(count(1947))
console.log(count(800900))