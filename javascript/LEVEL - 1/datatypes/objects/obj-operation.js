const person = {
    firstName : 'john',
    lastName : 'deo',
    age : 23
}

console.log( person.firstName )

console.log(person)
//  add new property
person.city = 'bombey'
person['country'] = 'india'
console.log( person )

// update
person.age = 25
person.firstName = 'John'
console.log(person)

// delete
delete person.city
console.log(person)

