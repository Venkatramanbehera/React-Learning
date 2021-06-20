const string_endsWith = function(str1,str2){
    str1 = str1.split(' ')
    return  str1[str1.length-1] === str2
}

console.log(string_endsWith('JS PHP PYTHON' , 'PYTHON'))
console.log(string_endsWith('JS PHP PYTHON' , ')'))