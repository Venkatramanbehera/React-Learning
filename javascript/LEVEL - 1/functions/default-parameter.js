function greet(name){
    name = typeof name === 'undefined' ? 'anonymous' : name
    const message = `Hi , ${name}`
    return message
}

console.log(greet())

// console.log(typeof undefined ) 

function sayHello(name = 'anonymous'){
    const message = `Hi, ${name}`
    return message
}

console.log(sayHello())