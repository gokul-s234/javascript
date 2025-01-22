function checkIfFinite(value) {
    if (Number.isFinite(value)) {
        return `${value} is a finite number.;`
    } else {
        return `${value} is not a finite number.;`
    }
}

console.log(checkIfFinite(83));



// string number to number

function convertToNumber(str) {
    const number = Number(str);
    if (isNaN(number)) {
        return NaN; 
    }
    return number; 
}

console.log(convertToNumber("42"));


//  Math.min and Math.max

function findMinAndMax(num1, num2) {
    const smallest = Math.min(num1, num2); 
    const largest = Math.max(num1, num2); 
    return { smallest, largest };
}
console.log(findMinAndMax(43,67));