const getMultiply = function(a, b) {
    return a * b 
} 

const getSum = function(a, b) {
    return a + b
}

const getSubtraction = function(a, b) {
    return a - b
}

const getDivision = function(a, b) {
    return b !== 0 ? a / b : 'На ноль делить нельзя:('
}

const operations = {
    multiply: getMultiply,
    sum: getSum,
    subtraction: getSubtraction,
    division: getDivision
}

const selectedOperation = "division"

function calculate(a, b, operation) {
    return operation(a, b)
}

let a = calculate(3, 1, operations[selectedOperation])
console.log(a)