// using try and catch to reverse a string
function reverseString(input) {
    try {
        if (typeof input !== 'string') {
            throw new Error("Input must be a string");
        }
        return input.split('').reverse().join('');
    } catch (error) {
        return error.message;
    }
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString(12345));   // Output: "Input must be a string"


// remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]



// factorial
function factorial(n) {
    if (n < 0)
         return "Factorial is not defined for negative numbers";

    if (n === 0 || n === 1) 
        return 1;
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5));