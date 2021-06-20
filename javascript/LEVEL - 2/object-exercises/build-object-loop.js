// convert an array of string into an object

const buildObj = function(arr){
    const result = {}
    for(let i=0; i<arr.length; i++){
        result[arr[i]] = arr[i].length
    }
    return result
}


console.log(buildObj(['apple','mango','kiwi','banana']))