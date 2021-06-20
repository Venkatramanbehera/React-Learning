console.log(this)

function f1(){
    console.log(this)
}

// f1()

const f2 = function(){
    console.log(this)
}
// f2()

// method shouldnot to be use arrow function.
const person = {
    name : 'john',
    details : function(){
        console.log(this.name)
    },
    det : () =>{
        console.log(this)
    }
}

// person.details()
// person.det()

function f3(){
    
    const person = {
        name : 'john',
        details : function(){
            console.log(this)
        },
        det : () =>{
            console.log(this)
        }
    } 
    person.details()
    person.det()
}
f3()