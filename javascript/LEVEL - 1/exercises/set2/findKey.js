const keys = function(obj){
    const result = []
    for(let i in obj){
        // console.log(i)
        result.push(i)
    }
    return result
}

const obj  = { d:1, c:2, t:3}
console.log(keys(obj))

const obj2  = { first:'matt', last:'lane'}
console.log(keys(obj2))

const obj3  = { }
console.log(keys(obj3))