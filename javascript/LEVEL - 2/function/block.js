const str1 = 'global scope'
function greet(){
    const str2 = 'function scope'
    if(true){
        const str3 = 'block scope'
        console.log(str3)
        console.log(str2)
        console.log(str1)
    }
    // console.log(str3) - ReferenceError
    console.log(str2)
    console.log(str1)
}
console.log(str1)
// console.log(str2) - ReferenceError
// console.log(str3) - ReferenceError


greet()

