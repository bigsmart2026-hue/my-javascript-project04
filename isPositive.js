function isPositive(num) {
    if (num > 0) {
        return "positive";
   }
    if (num < 0) {
    return "negative"
   }
    return "zero"
   
}

console.log(isPositive(10));
console.log(isPositive(-3));
console.log(isPositive(0));

