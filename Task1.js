/*
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
*/


const reversTheString = (inputString) => {
    let reversedString = '';
    for(let i = inputString.length - 1; i >= 0; i--) {
        reversedString = reversedString + inputString[i]
    }
    return reversedString
}

const input = 'hello world'
const result = reversTheString(input)
console.log(result);
