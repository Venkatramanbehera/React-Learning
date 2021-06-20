const count = function(line, str){
    line = line.toLowerCase()
    line = line.split(' ')
    let count = 0
    // console.log(line)
    for(let i=0; i<line.length; i++){
        if(line[i] === str){
            count++
        }
    }

    return count
}

console.log(count('The qick brown fox jumps over the lazy dog','the'))
console.log(count('The qick brown fox jumps over the lazy dog','fox'))