const rangeBetween = function(first, end){
    const arr = []
    for(let i=first; i<=end; i++){
        arr.push(i)
    }
    return arr;
}

console.log(rangeBetween(2,8))
console.log(rangeBetween(-4,7))