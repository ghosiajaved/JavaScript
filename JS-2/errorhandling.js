
// Throw 

//Allows you to create a custom error.
/* function bprange(bp) {

    if (bp > 180) throw "Bp too high !";
    else {
        if (bp < 90) throw "Bp too low !";
    }
}

let bp = bprange(200); */


// Try/Catch

function multiplynum(num1, num2) {

    try {
        if (num1 == 0 || num2 == 0) {
            throw new Error("Cannot multiply by 0 as whole value becomes 0");
        }
        let result = num1 * num2;
        console.log(`Result: ${result}`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }

}

multiplynum(4,0);
multiplynum(5,41); 

// Try..catch..finally

function dividenum(num1, num2) {

    try {
        if (num2 == 0) {
            throw new Error("Cannot divide by 0");
        }
        let result = num1 / num2;
        console.log(`Result: ${result}`);
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }
    finally{
        console.log("Division operation ended successfully");
    }

}

dividenum(80,4);
dividenum(30,0);

function addval(array,index,value){
    try{
        if(!Array.isArray(array)){
            throw new Error("Value entered is not an array");
        }
        if(index>array.length || index<0){
            throw new Error("Index out of bound");
        }
        array[index] = value;
        console.log(`Array after modification: ${array}`);
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        console.log("Array modification ended");

    }
}

addval([55,66,33,31,166],3,16);
addval("Hi",2,5);

//Types of errors

//1. Range Error
let number= 3;
try{
    number.toPrecision(300);             //number cannot have 300 significant digits
}
catch(error) {
    console.log(error.message);
}

//2. Reference Error
let number1= 3;
try{
    number1= number2 +5 ;             //number 2 is not referenced
}
catch(error) {
    console.log(error.message);
} 

//3. Type Error
let number2= 3;
try{
    number2.toUpperCase() ;             //cannot convert a number to upper case
}
catch(error) {
    console.log(error.message);
} 

//4. Syntax Error
//gives errors related to syntax if it is wrong