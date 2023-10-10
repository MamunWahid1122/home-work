
// addition 
function mySum(a,b){
    var a;
    var b;
    var c = a+ b;

    var d = a * b;
    return [c , d]
}

var [addition, multiplication] = mySum(5,2);

console.log(addition, multiplication);