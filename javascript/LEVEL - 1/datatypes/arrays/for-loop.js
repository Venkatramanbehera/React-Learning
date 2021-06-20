const numbers = [10,20,30,40,50]

numbers.pop(3)

console.log(numbers)

const fruits = ['apple','mango','kiwi']

// console.log(fruits[0][0])

for( let [index,fr] of fruits.entries()){
    console.log(index,fr)
}

// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i])
// }

// const copyArray = fruits.slice()
// console.log(copyArray)