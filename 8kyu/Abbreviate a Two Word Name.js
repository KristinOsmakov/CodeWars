// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F
function abbrevName(name){

    let word = name.split(' ');
    const word2 = word.map(word => word[0].toUpperCase());
    return word2.join(".");

}