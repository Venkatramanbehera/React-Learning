// forEach

const products = ['marker','scale','board']

products.forEach(function(ele,i,arr){
    console.log(`${ele.toUpperCase()} has ${ele.length} characters`)
    console.log(i,ele,arr)
    
})