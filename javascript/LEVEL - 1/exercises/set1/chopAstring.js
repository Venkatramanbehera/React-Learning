const chopAString = function(str, num){
    const arr = []
    for(let i=0; i<str.length; i+=num){
        arr.push(str.slice(i,i+num))
    }
    return arr
}

console.log(chopAString('resource',2))
console.log(chopAString('dcresource',3))