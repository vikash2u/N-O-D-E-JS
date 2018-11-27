//example -1
/*
let nums = [3, 5, 7]
let squares = nums.map(function (n) {
    return n * n
})
console.log(squares)
*/

/*Exapmle -2

The function passed to .map can also be written as arrow function by removing the function keyword and instead
adding the arrow =>:
let nums = [3, 5, 7]
let squares = nums.map((n) => {
    return n * n
})
console.log(squares)
*/

/* Exapmle -3

However, this can be written even more concise. If the function body consists of only one statement and that
statement computes the return value, the curly braces of wrapping the function body can be removed, as well as
the return keyword.
Complete Node.js Tips & Secrets for Professionals 173
let nums = [3, 5, 7]
let squares = nums.map(n => n * n)
console.log(squares)
*/

