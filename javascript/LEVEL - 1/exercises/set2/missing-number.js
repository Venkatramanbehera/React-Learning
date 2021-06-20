// const getCash = function(cash){
//     let avail = [100,200,500,2000]
//     let resAvail = []
//     let result = []
//     for( let i=0; i<avail.length; i++){
//         if(cash > avail[i]){
//             resAvail.push(avail[i])
//         }
//     }
//     resAvail = resAvail.reverse() // [500,200,100]
//     for(let i = 0; i<resAvail.length; i++){
//         if(cash >= resAvail[i]){
//             result.push(resAvail[i])
//             cash = cash-resAvail[i]
//         }
//     }
//     return result
// }

// console.log(getCash(700))

const missing = function(arr){
    const n = arr.length
    let total = Math.floor((n+1)*(n+2)/2)
    for(let i=0; i<n; i++){
        total -= arr[i]
    }
    return total
}

console.log(missing([1,2,3,5]))