// function isBlank(a){
//     const result = a.length === 0
//     if(result)return result
//     else{
//         for(let i=0; i<a.length; i++){
//             if(a[i] === ' '){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(isBlank(''))

// console.log(isBlank('a'))
// console.log(isBlank('   '))

function and(a,b){
    if (a === true && b === false) return false
    else if (a === true && b === true) return true
    else if (a === false && b === true) return false
    else return false
}

console.log(and(false,false))