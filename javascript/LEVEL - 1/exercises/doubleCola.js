function doubleCola(a,b){
    for(let i=0; i < b; i++){
        let x = a.shift()
        a.push(x)
        a.push(x)
    }
    return a[0]
}

const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
const r = 6
console.log(doubleCola(names,r))