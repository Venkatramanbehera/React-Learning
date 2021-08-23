const promiseObj = new Promise((resolve,reject) => {
    setTimeout(() => {
        const someTask = false
        if(someTask){
            // resolve('The promises was resolved')
            const data = [ { id:1, name:'john'},{ id:2, name:'jesi'}]
            resolve(data)
        }else{
            // reject('Promises was not resolved')
            reject(new Error('something went wrong'))
        }
    },3000)
})

promiseObj
    .then((res) => console.log(res))
    .catch(err => console.log(err.message))