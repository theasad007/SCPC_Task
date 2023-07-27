function romanToInteger(roman) {
    let num = charToInteger(roman.charAt(0));
    let previous, current;

    for (let i = 1; i < roman.length; i++) {
        current = charToInteger(roman.charAt(i));
        previous = charToInteger(roman.charAt(i - 1));

        if (current <= previous) {
            num += current;
        } else {
            num = num - previous * 2 + current;
        }
    }

    return num;
}

function charToInteger(roman) {
    switch (roman) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: throw new Error('Invalid Roman numeral character: ' + roman);
    }
}

const roman = 'XXI'
const result = romanToInteger(roman)
console.log(result)