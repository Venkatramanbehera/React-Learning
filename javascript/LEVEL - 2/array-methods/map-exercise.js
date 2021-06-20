const number = [10,15,20,25]
// add 2 to every element of the array

const addRes = number.map(function(ele){
    return ele+2
})

console.log(addRes)

// add 2 to an even number and 3 to odd number

const evenOdd = number.map(function(ele){
    if(ele % 2 === 0){
        return ele+2
    }else{
        return ele+3
    }
})

console.log(evenOdd)

// add 5 only if the number is even

const even = number.map(function(ele){
    if( ele % 2 === 0){
        return ele+5
    }else{
        return ele
    }
})

console.log(even)


const fruits = ['apple','mango','kiwi']
// return array of object
const obj = fruits.map(function(ele){
    return {
        [ ele ] : ele.length
    }
})

console.log(obj)