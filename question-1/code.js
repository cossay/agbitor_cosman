/**
 * Converts a number to words
 * @param {number} num 
 */
function convertToWord(num) {
    var units = {
        1000000000: "billion",
        1000000: "million",
        1000: "thousand",
        1: ""
    };

    function translationHundred(hundredValue) {

        var transA = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightenn", "nineteen"];
        var transB = ["", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        var hundrece = "hundred";

        var numArray = String(hundredValue).split('');

        var translation = "";

        if (0 > hundredValue) {
            return translation;
        }

        if (hundredValue < 20) {
            return `and ${transA[hundredValue - 1]}`;
        }

        if (hundredValue < 100) {
            translation = `${transB[numArray[0] - 1]}`;
            if (numArray[1] > 0) {
                translation += ` ${transA[numArray[1] - 1]}`;
            }

            return translation;
        }

        translation = `${transA[numArray[0] - 1]} ${hundrece}`;

        if (numArray[1] > 0 || numArray[2] > 0) {
            translation += ' and'
        }

        if (numArray[1] > 0) {
            translation += ` ${transB[numArray[1] - 1]}`;
        }

        if (numArray[2] > 0) {
            translation += ` ${transA[numArray[2] - 1]}`;
        }

        return translation;
    }

    var translation = "";
    var remainder = Math.abs(num);

    var unitKeys = Object.keys(units);

    unitKeys.sort().reverse().forEach(function (divisor, index) {
        var times = Math.floor(remainder / divisor);
        if (times > 0) {
            remainder -= times * divisor;
            translation += `${translationHundred(times)} ${units[divisor]} `;
        }
    });

    translation = translation.trim();

    if (translation.startsWith('and')) {
        translation = translation.replace('and', '');
    }

    return translation.trim();
}

console.log(convertToWord(1011));
console.log(convertToWord(7466474));
console.log(convertToWord(9685747443));
console.log(convertToWord(53536));
console.log(convertToWord(47885));
//NOTE: YOU MAY IGNORE THIS ANSWER AS I COULDN'T FINISH IT WITHIN THE ALLOCATED TIME
