const userPassword = 'secret3'
if(userPassword.length >= 8 && userPassword.length <= 128){
    console.log('proceed forward')
} else {
    console.log('password is too short')
}