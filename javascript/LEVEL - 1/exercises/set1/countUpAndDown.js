const countUpAndDown = function(num){
    const result = []
    let i = 0
    for( i; i <= num; i++){
        result.push(i)
    }
    // console.log(i)

    for(i = num-1; i>0; i--){
        result.push(i)
    }
    return result
}

console.log(countUpAndDown(2))
console.log(countUpAndDown(0))