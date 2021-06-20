const products = [
    { id : 1, name : 'marker', price : 10},
    { id : 2, name : 'board', price : 30},
    { id : 3, name : 'pencil', price : 100}
]

const result = products.map( product => product.name)

console.log(result)