
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
// first task done

// second task 
function convertToString(name){
      var name;
      var convertname = name.toUpperCase();
    return convertname;
}

var name = convertToString("My Name is Mamun");
console.log(name);
// second task done

// third task start 
var student = marksStudent(39);
function marksStudent(marks){
    var marks;
    if(marks >= 80){
        // console.log("A+");
        return "A+";
        
    }
    else if(marks >= 75){
        // console.log("A");
        return "A";
    }
    else if(marks >= 70){
        //  console.log("A-");
        return "A-";
    }
    else if(marks >= 60 || marks >= 65){
        // console.log("B+");
        return "B+";
    }
    else if(marks >= 50){
        // console.log("B");
        return "B";
    }
    else if(marks >= 40){
        // console.log("C");
        return "C";
    }
    else if(marks <=40){
        // console.log("Fale korso");
        return "Fale Korso";
    }

    return;
}
console.log(student)
// third task done 




