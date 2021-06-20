process.stdin.setEncoding('utf-8')
let input = []
process.stdin.on('data', data => input += data)
console.log(input)