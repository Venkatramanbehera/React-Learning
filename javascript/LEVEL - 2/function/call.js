const person = { firstName:'chiku', lastName:'behera' }

function greet(msg){
    console.log(this)
    console.log(msg + ' '+ this.firstName)
}

// greet('hi') 
greet.call(person,'hello')