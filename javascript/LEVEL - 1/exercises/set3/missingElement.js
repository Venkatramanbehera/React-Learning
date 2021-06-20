const missingElement = function(arr){
    let result
    let max = Math.max(...arr)
    // console.log(max)
    let min = Math.min(...arr)
    // console.log(min)
    for(let i=min; i<= max; i++){
        if( !arr.includes(i)){
            // console.log(i)
            result = i
        }
    }
    return result
}

console.log(missingElement([1,2,3,5]))
console.log(missingElement([15,17,18,19]))