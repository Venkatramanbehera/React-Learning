const products = [
    { id : 1, name : 'marker', price : 10},
    { id : 2, name : 'board', price : 30},
    { id : 3, name : 'pencil', price : 100}
]

const result = products.filter(function(product){
    return product.price >= 30
})

console.log(result)

const result2 = products.filter( (product) => {
    return product.price > 5
})
console.log(result2)

const result3 = products.filter( product => product.price > 70
)

console.log(result3)
