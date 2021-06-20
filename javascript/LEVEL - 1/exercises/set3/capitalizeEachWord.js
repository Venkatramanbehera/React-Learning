const capitalize = function(str){
    let result = ''
    result += str[0].toUpperCase()
    for( let i=1; i<str.length; i++){
        if(str[i] === ' '){
            result += ' '+str[i+1].toUpperCase()
            i = i+1
        }else{
            result += str[i]
        }
    }
    return result
}


const capitalizeA = function(str){
    const result = []
    const words = str.split(' ')
    for(let i=0; i<words.length; i++){
        const newStr = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
        result.push(newStr)
    }
    return result.join(' ')
}

console.log(capitalize('js string exercises'))
console.log(capitalizeA('js string exercises'))