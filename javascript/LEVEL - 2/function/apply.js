const person = { firstName:'chiku', lastName:'behera' }

function greet(msg,sign){
    console.log(this)
    console.log(msg + ' '+sign+' '+ this.firstName)
}

// greet('hi') 
// greet.call(person,'hello')
greet.apply(person,['helon','Mr'])