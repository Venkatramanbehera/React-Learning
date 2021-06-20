const strWeight = function(str1,str2){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let strWeight1 = 0, strWeight2 = 0, result
    for(let i = 0; i<str1.length; i++){
        strWeight1 += alphabets.indexOf(str1[i]) + 1
    }
    for(let i = 0; i<str2.length; i++){
        strWeight2 += alphabets.indexOf(str2[i]) + 1
    }
    // console.log(strWeight1,strWeight2)
    if( strWeight1 === strWeight2){
        return 'equal'
    }else if( strWeight1 > strWeight2){
        return 1
    }else{
        return 2
    }
}

console.log(strWeight('batman','superman'))
console.log(strWeight('batman','manbat'))