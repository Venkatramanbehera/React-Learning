function high(a){
    a = a.split(' ')
    console.log(a)
    let max = 0, result = ''
    for(let i=0; i<a.length; i++){
        var s = a[i]
        let val = 0
        for( let j=0; j<s.length; j++){
            val += (s.charCodeAt(j) - 96)
        }
        if(val > max){
            max = val
            result = s
        }
    }
    return result
}

console.log(high("a b c d e f"))
console.log(high("hello world"))

// console.log(highestScoringWord("hello world")); // "world"

// highestScoringWord("go ahead make my day"); // "my"

// highestScoringWord("there is no place like home"); // "there"

// highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"

// highestScoringWord("bbb cc f aaaaaa"); // "bbb"

// highestScoringWord("this sentence has two highest scoring words"