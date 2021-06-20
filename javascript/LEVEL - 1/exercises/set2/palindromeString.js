const palindrome = function(str){
    let reverseString = ''
    for(let i=str.length-1; i>=0; i--){
        reverseString += str[i]
    }
    return reverseString === str
}

console.log(palindrome('madam'))
console.log(palindrome('javascript'))