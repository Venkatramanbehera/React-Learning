const last = function(arr,n){
    let result 
    if( n === undefined){
        result= arr[arr.length - 1]
    }
    else{
        result = arr.slice(-n)
    }
    // if( n >= arr.length){
    //     return arr
    // }
    // for(let i=arr.length-n; i<arr.length; i++){
    //     result.push(arr[i])
    // }
    return result
}

console.log(last([7,9,0,-2]))
console.log(last([7,9,0,-2],3))
console.log(last([7,9,0,-2],6))