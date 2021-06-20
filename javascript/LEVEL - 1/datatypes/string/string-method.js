const stringPrimitive = "A New String."
// console.log(typeof stringPrimitive)

const stringObject = new String('A new String');
// console.log(typeof stringObject)


// using multi line string
console.log('string text line 1\n' + 
'string text line 2')

// using template literals
// console.log(`string text line 1
// string at line 2`)

console.log('Hello\nworld')

const brokenString = "Then he said,\"Hello World!!\"";
console.log(brokenString)


console.log("How are you"[5])
console.log("How are you".charAt(4))
console.log("How are you".indexOf('a'))
console.log("How are you".lastIndexOf('a'))
console.log("How are you".indexOf('are'))
console.log("How are you".slice(4))

const originalString = "How are you";
const splitString = originalString.split(" ");
console.log(splitString)