// Write a function that returns the number of arguments it received.
//
// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2
function args_count(...arg){
    return arg.length;
}

