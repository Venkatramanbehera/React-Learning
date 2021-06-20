const productName = 'Pen';
console.log(typeof productName); // 'string'

const price = 10;
console.log(typeof price); // 'number'

const available = true;
console.log(typeof available); // 'boolean'

const brands = ['nike','hrx'];
console.log(typeof brands); //'object'

const customer = {
    name : 'customer1',
    email : 'c1@gmail.com'
}
console.log(typeof customer); // 'object'

const greet = function(){
    return 'Hi there';
}
console.log(typeof greet); // 'function'

const value = undefined;
console.log(typeof value); // 'undefined'

let run;
console.log(typeof run);