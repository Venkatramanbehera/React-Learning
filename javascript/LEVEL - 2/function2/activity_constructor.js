function User(fName,lName){
    this.firstName = fName
    this.lastName = lName
    this.admin = false
    this.details = function(){
        return `${this.firstName} - admin (${this.admin})`
    }
}

const user1 = new User('steve','f')
console.log(user1.details())