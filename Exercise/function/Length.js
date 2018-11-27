function argumentLength(...args) {
    return args.length;
}
console.log(argumentLength(5)); // returns 1
console.log(argumentLength(5, 3)); //returns 2
console.log(argumentLength(5, 3, 6));//returns 3