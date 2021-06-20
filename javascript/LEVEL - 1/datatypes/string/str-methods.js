const password = 'secret123'

// property - value
console.log(password.length)

console.log( password.length > 8 && password.length < 128)

// methods - behaviour
const user = 'chiku'
console.log(user.toUpperCase())


const word = 'javascript'
console.log(word.toUpperCase()) // JAVASCRIPT
console.log(word)
console.log('JOHN'.toLowerCase()); // john
console.log(word.indexOf('a')) // 1
console.log(word.lastIndexOf('a')) // 3

console.log(word.indexOf('script')) // 4
console.log(word.includes('a')) // true

console.log(word.slice(2,5)) // 'vas'
console.log(word.slice(5)); // cript
console.log(word.substr(2,5)); // vascr

const str = 'js, react, node, express, mongo'
console.log(str.split(', '))

const map = 'banglore - mysore - cochin'
console.log(map.split('- '))