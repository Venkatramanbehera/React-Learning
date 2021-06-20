const max = function(arr){
    let maxm = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > maxm){
            maxm = arr[i]
        }
    }
    return maxm
}

console.log(max([10,20,90,30]))