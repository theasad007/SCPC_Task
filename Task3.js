/* 
Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
*/

function elementCount(arr) {
    let mostItemLength = 0
    let elementItem; 
    for (let i = 0; i < arr.length; i++) {
        let element = arr.filter((currentElement) => currentElement == arr[i]).length;
        if (element > mostItemLength) {
            mostItemLength = element;
            elementItem = [arr[i]]
        }  
    }
    return elementItem;
};
var array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(elementCount(array));