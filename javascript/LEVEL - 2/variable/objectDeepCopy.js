const person = {
    name : 'steve'
}

// const student = Object.assign({},person)
const student = {...person}

console.log(person)
console.log(student)

person.name = 'chiku'
console.log(person)
console.log(student)

student.name = 'chiki'
console.log(person)
console.log(student)
