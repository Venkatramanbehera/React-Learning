const person = {
    firstName : 'john',
    lastName : 'doe',
    email : 'john@deo.com'
}

const length = Object.keys(person).length
console.log(length)

const { firstName, email, lastName} = person
console.log(email, firstName, lastName)
