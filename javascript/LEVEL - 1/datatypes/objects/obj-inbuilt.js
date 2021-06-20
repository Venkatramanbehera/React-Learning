const person = {
    firstName : 'john',
    lastName : 'deo',
    age : 23
}

console.log(Object.keys(person))
console.log(Object.values(person))

console.log(Object.keys(person).includes('firstName'))
console.log(Object.values(person).includes('deo'))