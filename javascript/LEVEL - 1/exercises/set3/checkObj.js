const checkObj = function(obj, str){
    for(const ob in obj){
        // console.log(ob)
        if( ob === str) return true
    }
    return false
}

console.log(checkObj({ name:'gokul',city:'banglore'},'name'))
console.log(checkObj({ name:'gokul',city:'banglore'},'age'))