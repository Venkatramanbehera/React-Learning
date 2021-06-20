const person = {
    firstName : 'john',
    lastName : 'deo',
    age : 22
}

for(let keys in person){
    console.log(keys,'->', person[keys])
}