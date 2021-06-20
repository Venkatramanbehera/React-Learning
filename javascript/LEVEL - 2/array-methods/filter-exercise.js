const menuItems = [
    { id : 1, name : 'chiken kebab', price : 290, isVeg : false},
    { id : 2, name : 'paneer chilly', price : 210, isVeg : true},
    { id : 3, name : 'chiken biryani', price : 350, isVeg : false},
    { id : 4, name : 'veg biryani', price : 300, isVeg : true},
]

// find all items which is veg

const result = menuItems.filter(function(ele){
    return ele.isVeg
})

console.log(result)

// find all item whoose price is between 200 - 300

const priceResult = menuItems.filter(function(ele){
    return ele.price >= 200 && ele.price <= 300
})

console.log(priceResult)

// find the item whose id is 3

const idResult = menuItems.find(function(ele){
    return ele.id === 3
})

console.log(idResult)

// menuItem name of biryani
const birResult = menuItems.filter(function(ele){
    return ele.name.includes('biryani')
})

console.log(birResult)
