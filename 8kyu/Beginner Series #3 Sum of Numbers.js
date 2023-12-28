// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//     Note: a and b are not ordered!
function getSum(a, b)
{
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    };
    return sum;
}