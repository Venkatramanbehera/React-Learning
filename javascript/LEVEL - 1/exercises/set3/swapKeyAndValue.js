const swapKeyAndValue = function(obj, str){
    const result = {}
    for(let key in obj){
        if( key === str){
            // let temp = obj[key]
            result[obj[key]] = key
        }
        else{
            result[key] = obj[key]
        }
    }
    return result
}

const instructor = { name:'Elie', job:'instructor' }
console.log(swapKeyAndValue(instructor,'name'))
console.log(swapKeyAndValue(instructor,'job'))