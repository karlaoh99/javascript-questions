/*
Given an integer 'n', count the total number of 1 digits 
appearing in all non-negative integers less than or equal to 'n'.
*/

// Brute-force algorithm
function numberOfDigitBF(number, digit) {
    let c = 0;
    for (var i = 0; i <= number; i++)
        c += (i.toString().match(new RegExp(digit,'g')) || []).length;

    return c;
}

// Better solution
function numSlice(s, i, j) {
    let t = parseInt(s.slice(i, j));
    
    if (isNaN(t)) return 0;
    return t;
}

function numberOfDigit(number, digit) {
    let s = number.toString();

    let c = 0;
    for (let i = 0; i < s.length; i++) {
        let n = s.length - i - 1;
        let t = numSlice(s, 0, i);
        
        if (s[i] > digit)
            t += 1;
        else if(s[i] == digit)
            c += numSlice(s, i + 1, s.length) + 1

        c += t * (10 ** n);
    }

    return c;
}

console.log(numberOfDigit(14, 1))