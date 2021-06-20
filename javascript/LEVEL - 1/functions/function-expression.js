const greet = function(name = 'anonymous'){
    const message = `Hi , ${ name }`
    return message
}

console.log(greet('chiku'))
console.log(greet())