 function strCount(str1,str2){
    let count = 0;
    for(let i=0; i<str1.length; i++){
        if(str1[i] === str2){
            count++;
        }
    }
    return count;
}

console.log( strCount("hello","o") )
console.log( strCount("hello","l") )
console.log( strCount("","z") )
