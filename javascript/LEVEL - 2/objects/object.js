const person = {
    name : 'Robin',
    city : 'Bangalore',
    profesion : 'sr software developer',
    greet : function(){
        return 'Hi there'
    },
    code : function(){
        // return person.name+' is curently coding'
        return this.name + ' is curently coding'
    },
    details : function(){
        // return this.name + ' is working as a  in bangalore'
        return `${this.name} is working as a ${this.profesion} in bangalore`
    }
}

console.log(person.name)
console.log(person.city)
console.log(person.greet())
console.log(person.code())
console.log(person.details())

