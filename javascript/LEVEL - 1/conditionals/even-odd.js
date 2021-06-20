function evenOdd(arr){
    const outputArray1 = [], outputArray2 = []
    for( let i = 0; i < arr.length; i++){
        if(arr[i]  % 2 === 0){
            outputArray1.push(arr[i])
        }else{
            outputArray2.push(arr[i])
        }
    }
    return outputArray1,outputArray2
}

console.log(evenOdd([1,2,3,4,5,6]))