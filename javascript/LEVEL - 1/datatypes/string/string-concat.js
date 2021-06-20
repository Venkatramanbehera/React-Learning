const source = "banglore", destination ='mysore', distance = 140, duration = '3 hour 30 mins'

// the distance between bangalore and mysore is 140kms and the time taken to travel is 3hours 30 mins.

// es5
console.log('the distance between ' + source + ' and ' + destination + ' is ' + distance + ' kms and the time taken to travel is ' +duration+'.')


// es6 - template literals
console.log(`the distance between ${source} and ${destination} is ${distance} kms and the time taken to travel is ${duration}.`)
