const calculator={
    result : 0,
    add : function(n = 0){
        this.result = this.result + n
        return this.result
    },
    minus : function(n = 0){
        this.result = this.result - n
        return this.result
    },
    multiply : function(n = 1){
        this.result = this.result * n
        return this.result
    },
    reset : function(){
        this.result = 0
        return this.result
    },
    divide : function(n = 1){
        this.result = this.result / n
        return this.result
    }
}


console.log(calculator.add(5))
console.log(calculator.minus(2))

console.log(calculator.multiply(3))
console.log(calculator.divide(2))
console.log(calculator.reset())
