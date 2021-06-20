function detect(a){
    let result = ''
    for(let i=0; i<a.length; i++){
        if(a[i].toUpperCase() !== a[i]){
            result += a[i]
        }
    }
    return result
}

console.log(detect('bEEFGBuFBRrHgUHlNFYaYr'))