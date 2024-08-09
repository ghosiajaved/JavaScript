
//Array properties and methods

const fruits=["Apples","Bananas","Grapes","Melon","Strawberry"];

const veggies= new Array("Eggplant","Broccoli","Cauliflower");

const cars= [];
cars[0]= "Audi";
cars[1]= "Revo";
cars[2]= "Land Cruiser"; 

//converting array to string
const stringcars= cars.toString();
console.log(stringcars);

//array join
const fruitsjoin= fruits.join("*");
console.log(fruitsjoin);

//array length
let length = fruits.length;
console.log(length);

//array sort
let sortedveggies= veggies.sort();
console.log(sortedveggies);

//push, pop and length already used in arrays.js

//shift
let car=cars.shift();
console.log(car);
console.log(cars);

//MAP
const numbers= [14,31,16,11,2];
const map1= numbers.map((x)=>x*2);   //creates new array and does not change the original one
console.log(map1);
console.log(numbers);

const num= [65, 44, 12, 4];
const map2= numbers.map(mult)   //A new array with the same length as the original

function mult(num) {
  return num * 10;
}

console.log(map2);

const people = [
    {firstname:"Imran", lastname:"Khan"},
    {firstname:"Amir", lastname:"Khan"},
    {firstname:"Musa", lastname:"Ahmad"}
];
  
const map3= people.map(FullName);
  
function FullName(n) {

  return [n.firstname,n.lastname].join(" ");
}

console.log(map3);

//FILTER

const nums = [1, 2, 3, 4, 5];
const evennumbers = nums.filter(number => number % 2 === 0);
console.log(evennumbers);

const marks= [33,57,91,25,82];
const result= marks.filter(checkmarks);  //creates new array that contains filtered elements

function checkmarks(m){
    return m>=50;  
}

console.log(result);

const bp= [85,91,115,70,125,108];
const normalbp= bp.filter(checkbp);

function checkbp(bp){
    return (bp>=90 && bp<=120);
}

console.log(normalbp);

const filtered = [12, 5, 18, 30, 44].filter(isOldEnough);
function isOldEnough(value) {

    return value >= 18;
}

console.log(filtered);
  

//REDUCE

const p = [60, 22, 5];
const rfunc= p.reduce(mfunction);     //Reduces an array to a single value. Returns: A single value

function mfunction(total, n) {
  return total * n;
}

console.log(rfunc);

const s = [10, 61, 32, 14, 55];
const sum = s.reduce((total, currval) => total + currval, 0);
console.log(sum); 


