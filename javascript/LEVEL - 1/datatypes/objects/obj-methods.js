const product = {
    id : 1,
    name : 'marker',
    price : 10
}

console.log(Object.entries(product)[2])

// ----------assign-----------

// console.log( product )
// const item = { id:10 }
// Object.assign(item,product)
// console.log( item )

// -------for freeze method-------

// Object.freeze(product)

// product.price = 15
// delete product.id  // we can't delete the item
// console.log(product)


// console.log( Object.isFrozen(product) ) // true

// -------for seal method------------

// Object.seal( product )
// product.rating = 7

// console.log( product )

// product.price = 15

// console.log( product )