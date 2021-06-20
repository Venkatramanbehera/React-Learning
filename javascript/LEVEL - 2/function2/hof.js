const number = [10,15,20,25,30]

// number.forEach(function(num){
//     console.log(num)
// })

// my forEach
function myForEach(arr, callback){
    // console.log(arr,callback(2))
    for(let i=0; i<arr.length; i++){
        callback(arr[i])
    }
}

myForEach(number,function(n){
    console.log(n)
})
// my filter

function myFilter(arr, callback){
    const earr = []
    for(let i=0; i<arr.length; i++){
        const bool = callback(arr[i])
        if(bool){
            earr.push(arr[i])
        }
    }
    return earr
}

const result = myFilter(number,function(n){
    return n % 2 === 0
})

console.log(result)