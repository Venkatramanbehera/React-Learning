const user = ['john','doe','jack','smith','jack']

console.log( user )

// const [u1,u2] = user
// console.log(u1,u2)

const [,,u1,,,u2] = user
console.log(u1,u2)
