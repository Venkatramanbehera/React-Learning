const num = [10,20,30,40,50]

const result = num.find(function(ele){
    return ele > 30
})

const even = num.find(function(ele){
    return ele > 20 && ele % 2 === 0
})

console.log(result)
console.log(even)

const user = [{ id : 1, name : 'john'},{ id : 2, name : 'steve'}]

const result2 = user.find(function(ele){
    return ele.id === 2
})

console.log(result2.id)

