/**
 * Returns second largest number in an array
 * @param {Array<number>} numbers 
 * @returns {number}
 */
function secondLargest(numbers) {

    if (!numbers.length) {
        return 0;
    }

    function sorter(a, b) {
        return a < b;
    }

    return numbers.sort(sorter)[1];
}


//Test
console.log(secondLargest([12, 2, 3, 40, 5, 6, 7, 8]));