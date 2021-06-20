const stringFromObject = function(obj){
    const result = []
    for( let key in obj){
        let str = `${key} = ${obj[key]}`
        result.push(str)
    }
    return result.join(',')
}
console.log(stringFromObject({a:1, b:'2'}) )
console.log(stringFromObject({name:'Elie',job:'Instructor',isCatOwner:false}) )