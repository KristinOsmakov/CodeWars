// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    let arr = String(n).split("");
    let reverse = arr.reverse();
    return reverse.map(Number);
}