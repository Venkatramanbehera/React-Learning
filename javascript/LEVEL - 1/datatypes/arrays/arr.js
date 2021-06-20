// Array are ordered , integer indexed and collection of values


// creating array - 1
// const fruits = []


// creating array - 2
// const fruits = new Array(1) [ <1 empty item> ]
// const fruits = ['mango','apple','water melon']
const fruits = new Array('mango','apple','water melon')
console.log(fruits)

console.log(fruits[0]) // 'mango'
console.log(fruits[10]) // undefined

console.log( typeof fruits )

console.log(fruits.push('kiwi'))
console.log(fruits)

console.log(fruits.pop())
console.log(fruits)

console.log(fruits.unshift('banana'))
console.log(fruits)

console.log(fruits.shift())
console.log(fruits)

const number = [10,20]
number.push(30,40,50)
console.log(number)

number.unshift(1,2,3)
console.log(number)

// number.reverse();
console.log(number.reverse())

console.log(fruits.sort())

const players = ['shewag','sachin','dhoni']
console.log( players.indexOf('sachin') )
console.log(players.indexOf('viru'))
console.log(players.lastIndexOf('dhoni'))

console.log(players.join(','))

const set1 = [10,20], set2 = [30,40]
console.log(set1+set2)

const result = set1.concat(set2)
console.log(result)