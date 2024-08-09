
console.log("HELLO");

//OBJECTS
//3 ways to create an object
//1
const employee={
    name: "Ali",
    age: 25,
    designation: "HR",
    experience: 2
};

//Accessing JavaScript Object Properties
console.log("Employee Name: "+employee.name);
console.log("Employee Age: "+employee["age"]);
let q="designation";
console.log("Employee Designation: "+employee[q]);

//2 Using "new" keyword
console.log("Supermarket");
const supermarket= new Object();
supermarket.name= "Al-Fatah";
supermarket.products= 30000;
supermarket.emp= 700;

for (key in supermarket){
    console.log(key+":"+supermarket[key]);
}

//3
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

//Javascript Object Methods

//1 creating a method in supermarket
supermarket.marketinfo= function(){
    console.log("Welcome to "+this.name+" We have "+this.products+" products in total. Happy shopping ! ");
}
console.log(supermarket.marketinfo());

console.log("Employee");
//2
const employee1={
    name: "Aliyan",
    age: 21,
    designation: "HR",
    experience: 2,
    info: function(){
        console.log(this.name+" "+this.designation);
    }
};

const array= Object.values(employee1);
console.log(array);

employee1.info();

//nested objects
const organization= {
    name:"UMT",
    location: "Johar Town",
    employees:{
        e1:"Hamza",
        e2:"Alina",
        e3:"Hafsa",
        e4:"Fizza"
    }
};
//accessing nested objects
console.log("Different ways to access nested objects");
console.log(organization.employees.e1);
console.log(organization.employees["e2"]);
console.log(organization["employees"]["e3"]);
let p1= "employees";
let p2= "e4";
console.log(organization[p1][p2]);

//Object Constructor Function
//used when many objects of same type are to be created

function ClubMember(first,last,age,occupation){
    this.firstName= first;
    this.lastName= last;
    this.age= age;
    this.occupation= occupation;
    this.nationality= "Pakistan";    //default value
    this.fullName= function() {
        return this.firstName + " " + this.lastName;
      };
} 

const member1= new ClubMember("Zain","Malik",28,"Singer");
const member2= new ClubMember("Hassan","Javed",23,"Joker");
const member3= new ClubMember("Atif","Aslam",34,"Engineer");

//adding property to created object
member1.nationality= "US";
console.log("Nationality of Member 1: "+member1.nationality);

//but property cannot be added to object constructor with statement : CluMember.nationality= "US"
//To add one, you must add it to the constructor function prototype
ClubMember.prototype.nationality= "US";  //default nationality of new objects will be US old ones will be same

member2.changeOccupation= function(occ){
    this.occupation= occ;                       //a new method is added to member 2 only
} 
member2.changeOccupation("Player");
//member1.changeOccupation("Cook");  //does not work
console.log("Occupation of Member 2 : "+member2.occupation);

//a new method can only be added to object constructer function through prototype
ClubMember.prototype.changeOccupation= function (occ){
    this.occupation= occ;
}
member3.changeOccupation("Singer");
console.log("Occupation of Member 3: "+member3.occupation);

//Getters and Setters

let person = {
    _bp: 100, // Private property to hold the actual age
  
    get bp() {
      return this._bp;
    },
  
    set bp(value) {
      if (value < 120 && value > 90){
        this._bp = value;
      } 
      else{
        console.log("Blood Pressure not normal !");
      }
    }
  };
  
console.log(person._bp); 
person._bp = 115;
console.log(person._bp);  


