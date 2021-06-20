const capitalize = function(str){
    const result = []
    let temp1 = '', temp2 =''
    for( let i=0; i<str.length; i++){
        if( i % 2 == 0){
            temp1 += str[i].toUpperCase()
            temp2 += str[i].toLowerCase()
        }else{
            temp1 += str[i].toLowerCase()
            temp2 += str[i].toUpperCase()
        }
    }
    
    return [temp1,temp2]
}


console.log(capitalize('abcdef'))
console.log(capitalize('dct'))