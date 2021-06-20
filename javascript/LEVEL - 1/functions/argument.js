// function add(){
//     console.log(arguments)
//     console.log(arguments.length)
// }

// add(10,20,30)

// console.log(add(10,20)) - > error

// const add = function(x,y){
//     return x+y
// }

// console.log(add(10,20))

const add = function(){
    let result = 0
    for(let i=0; i<arguments.length; i++){
        result+=arguments[i]
    }
    return result
}

console.log(add(10,20,30))