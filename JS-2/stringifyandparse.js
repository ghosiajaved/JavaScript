
//STRINGIFY
/* used to convert arrays and objects to string for storing data,transferring data to a server
or displaying data in a human-readable format.JSON.stringify() function will remove any functions
from a JavaScript object, */

//Stringify a JavaScript Object
const org= {name:"UMT",location:"Johar Town",Sector:"private"};
const stringifyorg= JSON.stringify(org);
console.log(stringifyorg);

const employee={name:"Aliya",age:35,job:"graphic designer",};
const stringifyemp= JSON.stringify(employee);
console.log(stringifyemp);

//Stringify a JavaScript Array
const names= ["ali","mehtab","salman","hamza","saleha"];
const stringifyname= JSON.stringify(names);
console.log(stringifyname);

const marks= [56,88,31,91,75];
const stringifymarks= JSON.stringify(marks);
console.log(stringifymarks);

//JSON.parse()
//It takes a JSON string and converts it into a JavaScript object or value.
const object= '{"name":"UMT", "location":"Johar Town", "Sector":"private"}';
const parsedobj= JSON.parse(object);
console.log(parsedobj);

const text= '{"name":"Aliya", "age":"35", "job":"graphic designer"}'
const parsedtxt= JSON.parse(text);
console.log(parsedtxt);

//Array as JSON
const arr= '["ali","mehtab","salman","hamza","saleha"]';
const parsedarr= JSON.parse(arr);
console.log(parsedarr);

//SHALLOW COPY
const person = {
    name: "Ahmad",
    age: 30,
    area: {place:"Faisal Town"}
};

// Shallow copy using spread operator
const shallowCopy = {...person};

shallowCopy.name = "Bilal"; // Changes only the shallowCopy
console.log(person);
console.log(shallowCopy);
shallowCopy.area.place = "Model Town"; // Changes both person and shallowCopy
console.log(person);
console.log(shallowCopy);  

//DEEP COPY
//Changes to the original object will not affect the copied object.
const organization = {
    name: "UMT",
    address: {
        area: "JT"
    }
};

const deepcopy = JSON.parse(JSON.stringify(organization));

deepcopy.name = "Minhaj";
deepcopy.address.area = "College Road";

console.log(organization); 
console.log(deepcopy); 


//GIT AND GITHUB
//use "dir /a" instead of "ls -a"

