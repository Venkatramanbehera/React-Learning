const repeatString = function(str,num){
    let result = ''
    if(num === undefined){
        return 'error in string or count'
    }
    for(let i=0; i<num; i++){
        result += 'a'
    }
    return result
}

console.log(repeatString('a',4))
console.log(repeatString('a'))