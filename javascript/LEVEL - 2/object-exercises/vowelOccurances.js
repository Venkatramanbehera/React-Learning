const vowelOccurances = function(str){
    const result = {
        a:0,
        e:0,
        i:0,
        o:0,
        u:0
    }
    // for(let i=0; i<str.length; i++){
    //     if( str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
    //         result[str[i]] = result[str[i]] + 1
    //     }
    // }

    for(const char of str){
        if(result.hasOwnProperty(char)){
            result[char] = result[char]+1
        }
    }

    return result
}


console.log(vowelOccurances('javascript'))