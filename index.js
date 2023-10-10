
// addition 
function mySum(a,b){
    var a;
    var b;
    
    // addition
    var c = a+ b;
    // multiplication
    var d = a * b;
    // subtraction
    var e = a - b;
    // division
    var f = a / b;
    return [c , d, e , f]
}

var [addition, multiplication,subtraction, division] = mySum(5,10);

console.log("additon is =", addition);
console.log("multiplication is =", multiplication)
console.log("Subtraction is =", subtraction);
console.log("division is =", division);