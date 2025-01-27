// string to uppercase
function touppercase(str) {
    return str.toUpperCase();
}
str = "hello world";
console.log(touppercase(str)); 


// string contains the word "JavaScript".
function checkstring(word, substring) {
    return word.includes(substring); 
}
let word = "Learning javascript";
console.log(checkstring(word, "javascript")); 




// remove vowels
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
let inputString = "Hello World";
console.log(removeVowels(inputString)); 