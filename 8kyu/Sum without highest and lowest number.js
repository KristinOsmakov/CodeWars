// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
//     Mind the input validation.
function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
        return 0;
    }
    const min = Math.min(...array);
    const max = Math.max(...array);
    let sum = 0;
    array.forEach(x => {sum += x});
    return sum - (min + max);
}