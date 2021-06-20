let a = [10]
// let c = a.slice(0) // deep copy - 1

// let c = [].concat(a) // deep copy - 2
let c = [...a] // deep copy - 3

console.log(a)
console.log(c)

a.push(20)
console.log(a)
console.log(c)

c.push(40)
console.log(a)
console.log(c)