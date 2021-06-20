const person = {
    name : 'hari'
}

const namePerson = person

console.log(person)
console.log(namePerson)

namePerson.name = 'raja'
console.log(person)
console.log(namePerson)

/*

shallow copy :- It means that certain values are still
connected to the original variable.

 */

const num = [10]

const raj = num

console.log(num)
console.log(raj)

num.push(30)
console.log(num)
console.log(raj)
