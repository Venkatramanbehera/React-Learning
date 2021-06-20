const products = [
    { id : 1, name : 'marker'},
    { id : 2, name : 'board'},
    { id : 3, name : 'pencil'}
]

const result = products.find(function(product){
    return product.id === 1
})

console.log(result)


// using arrow function

const result2 = products.find((product) => {
    return product.id === 1
})

console.log(result2)

// using improvising arrow function

const result3 = products.find( product => product.id === 1)
console.log(result3)