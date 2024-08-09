
//Different ways to initialize arrays
//1
const fruits=["Apples","Bananas","Grapes","Melon","Strawberry"];

//2
const cars= [];
cars[0]= "Audi";
cars[2]= "Revo";
cars[3]= "Land Cruiser"; 

//3
const veggies= new Array("Eggplant","Broccoli","Cauliflower");

//4
const p = new Array();
//const p = [];                  //works same like new Array()

// Accessing array elements

console.log(fruits[0]);
console.log(fruits);

//new does not work well at some places like in the satement below
var level= new Array(60);
console.log(level);
var level1= [60];
console.log(level1);

//accessing last array element
//Javascript does not support associative arrays
const lastfruit= fruits[fruits.length-1];
console.log(lastfruit);

console.log("Veggie Loop:");
//accessing through loop
const lenveggies=veggies.length;
for (let i=0;i<lenveggies;i++){
    console.log(veggies[i]);
}

//changing array element 
veggies[0]= "Onions";
console.log(veggies[0]);

//adding array element
cars.push("BMW");
console.log(cars);

fruits[6]= "Orange";   //creates undefined holes
console.log(fruits);

fruits.pop();
fruits.pop();

//delete
const delveg= delete(veggies[1]);
console.log(veggies);  //leaves holes thats why use of pop and shift is recommended


// how to know if a variable is an array beacause  typeof operator returns object 
//because a JavaScript array is an object.
console.log(Array.isArray(fruits));
console.log(cars instanceof Array);

//Nested arrays and objects
const person = {
    name: "Ali",
    age: 30,
    skills: [
      {name:"MERN", frameworks:["MongoDB","Express", "React","Node"]},
      {name:"MEAN", frameworks:["MongoDB","Express", "Angular","Node"]},
      {name:"ML", frameworks:["Scikit Learn","Keras", "PyTorch"]}
    ]
}

let x="";

for (let i in person.skills) {
    x +=" "+ person.skills[i].name + ": ";
    for (let j in person.skills[i].frameworks) {
      x += person.skills[i].frameworks[j]+ ", " ;
    }
}

console.log(x);

//Deep copying and shallow copying


