/* 
Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
*/



function romanToInteger(str1) {
    if (str1 == null) return -1;
    let num = charToInteger(str1.charAt(0));
    let pre, curr;

    for (let i = 1; i < str1.length; i++) {
        curr = charToInteger(str1.charAt(i));
        pre = charToInteger(str1.charAt(i - 1));
        if (curr <= pre) {
            num += curr;
        } else {
            num = num - pre * 2 + curr;
        }
    }

    return num;
}

function charToInteger(c) {
    switch (c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

const roman = 'VII';
const result = charToInteger(roman)
console.log(result);