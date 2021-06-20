const buildObj = function(arr){
    const result = {}
    arr.forEach(function(ele){
         result[ele] = ele.length
    })
    return result
}


console.log(buildObj(['apple','mango','kiwi','banana']))