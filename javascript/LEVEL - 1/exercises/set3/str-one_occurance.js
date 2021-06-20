
function check(str){
    const result = []
    for(let i=0; i<str.length; i++){
        if(! result.includes(str[i])){
            result.push(str[i])
        }else{
            const re = result.indexOf(str[i])
            result.splice(re)
        }
    }
    return result
}
const str = 'dct academy'
console.log(check(str))