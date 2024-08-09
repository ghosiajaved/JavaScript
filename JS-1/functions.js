
//simple function
function greetings(){
    return "WELCOME ";
}
var greet= greetings();
console.log(greet);

// function that multiplies two numbers
function multiplication(x,y){
    return x*y;
}

var mult=multiplication(5,5);
console.log(mult);

var mult1=multiplication(); // gives NaN as output 
console.log(mult1);

var mult2=multiplication; // returns function definition as output 
console.log(mult2);


//function checking percentage and assigning grades
function gradeCalc(marks){
    if(marks>=90){console.log("A+")}
    else if(marks>=80 && marks<90){console.log("Grade:A")}
    else if(marks>=70 && marks<80){console.log("Grade:B")}
    else if(marks>=60 && marks70){console.log("Grade:C")}
    else if(marks>=50 && marks<60){console.log("Grade:D")}
    else{console.log("Grade:F")}
}

var grade= gradeCalc(88.59)


//variables declared inside a function become local to that function
function func(){
    let item="chocolate";
}
//console.log(item); //gives error: undefined

//Anonymous Functions
//1
const greets = function(name) {
    console.log("Hello, " + name + "!");
  };
  
  greets("Alice");

//2 Immediately Invoked Function Expression IIFE
(function() {
    console.log("This is an IIFE");
  })();

//3
function doSomething(callback) {
    // ...
    callback();
  }
  
  doSomething(function() {
    console.log("Callback function executed");
  });


//OBJECTS
//two ways to make an object
//1
const employee={
    name: "Ali",
    age: 25,
    designation: "HR",
    experience: 2
};

//Accessing JavaScript Properties
console.log("Employee Name: "+employee.name);
console.log("Employee Age: "+employee["age"]);
let q="designation";
console.log("Employee Designation: "+employee[q]);

console.log("Employee Information");
for (key in employee){
    console.log(key+":"+employee[key]);
}

//2
const car={};

car.name= "Audi",
car.model= "Audi e-tron GT",
car.status= "New"

console.log("Car");
for (key in car){
    console.log(key+":"+car[key]);
}

//javascript objects are mutable while primitives are immutable
const z = car;
z.status= "old"; //changes the original too as z and car share same memory address
console.log("Car Status: "+car.status);  //output: old

//adding new property
car.manufacturer= "Volkswagen Group"
console.log("Car Manufacturer: "+car.manufacturer);

//Deleting Property
delete employee.experience;  //deletes value as well as property
for (key in employee){
    console.log(key +":"+ employee[key]);
}

//nested objects
const organization= {
    name:"UMT",
    location: "Johar Town",
    employees:{
        e1:"Hamza",
        e2:"Alina",
        e3:"Hafsa"
    }
};

console.log(organization.employees.e2);

console.log("Employee");
//object methods
const employee1={
    name: "Aliyan",
    age: 21,
    designation: "HR",
    experience: 2,
    info: function(){
        console.log(this.name+" "+this.designation);
    }
};

employee1.info();

