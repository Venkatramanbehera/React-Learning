function authenticate(arr,str){
    let auth = false
    for( let i=0; i < arr.length; i++){
        if( arr[i] === str){
            auth = true
            break
        }
    }
    return auth
}

const password = ['Password123','dct@academy.com','secret123','qwerty','gopro123']
console.log(authenticate(password,'dct@academy.com') ? 'authenticated' : 'not authenticated')
