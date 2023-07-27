/* 
Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

function findSecondSmallest(arr) {
    let min = Infinity;
    let secondMin = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        secondMin = min;
        min = arr[i];
      } else if (arr[i] < secondMin && arr[i] !== min) {
        secondMin = arr[i];
      }
    }
  
    return secondMin;
  }
  


const array = [15, 37, 9, 21, 55];
const result = findSecondSmallest(array);

console.log('Second smallest number: ' + result);