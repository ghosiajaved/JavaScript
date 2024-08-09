//Let

// Let and Const are hoisted but not initialized, present in "Temporal Dead Zone" until declaration is reached.
// Gives reference error if accessed before initialization
var num= 5;          //Output:5
console.log(num);

function check(){
    let num=10;      //let has block scope. Output: 10
    return num;
}

var printnum= check();
console.log(printnum);  

console.log(num);    //Output: 5

//Declaration: Let must be declared before use 
//console.log(x);      //gives error
//let x=15;   

//Let cannot be redeclared
let number1= 10;
//let number1= 15;    //this line will give error as let cannot be redeclared

//Const

//const variables must be assigned values when declared
const avgerage_temperature= 25;

//const variables cannot be reassigned
const pi=3.14;
//let pi=3.145;     //gives error

//Elements of const array can be changed and new elements can be added
const employees= ["Fatima","Ayesha","Aliya"];
employees[0]="Rubina";
console.log(employees[0]);
employees.push("Hania");
console.log(employees[3]);

//Properties of const object can be changed and new property can be added
const university= {name:"UMT",location:"JT",students:20000};
university.students= 25000;
console.log(university.students);
university.employee= 10000;
console.log(university.employee);


//Arrow Functions
var s= (q,w) => q-w;
let res= s(100,40);
console.log(res);

var m = (s,t) => { return s * t };
let result= m(4,5);
console.log(result);

var hello= () => "HELLO WORLD";
console.log(hello());

var hi="";
hi = value => "HELLO "+ value;
console.log(hi("GHOSIA"));

//Template Literals
let string= `Hello Everyone! I am writing this 
string on "multiple" lines easily`;
console.log(string);

let time= "Morning";
let greeting= `Good ${time}`;
console.log(greeting);

// string interpolation
let marks= 49;
let totalmarks= 50;
let percentage= `Percentage: ${(marks/totalmarks)*100}`
console.log(percentage);

let Name= "Julia";
let age= 27;
let g = `HAPPY BIRTHDAY ${Name} ! You turned ${age} this year`;
console.log(g);




