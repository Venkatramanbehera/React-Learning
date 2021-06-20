const first = function(arr,num){
    let result 
    if( num === undefined){
        result = arr[0]
    }
    else{
        if(num < 0){
            result = arr.slice(0)
        }else{
            result = arr.slice(0,num)
        }
    }
    return result
}

console.log(first([7,9,0,-2]))
console.log(first([],3))
console.log(first([],3))
console.log(first([7,9,0,-2],3))
console.log(first([7,9,0,-2],6))
console.log(first([7,9,0,-2],-3))