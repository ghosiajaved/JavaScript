
//Promises
//Represents the eventual completion (or failure) of an asynchronous operation and its resulting value
//Chaining .then() for success, .catch() for failure
//1 
function display(someval){
    console.log(someval);
} 
let promise1= new Promise(function(resolve,reject) {
    let x= Math.random();
    if(x<10){
        resolve("Value less than 10");
    }
    else {
        reject("Error! Value greater than 10 or equal to 10");
    }
});

promise1.then(
    function (value){display(value);},
    function (error){display(error);}
)

//2
let otherprom= new Promise(function(resolve,reject){
    let present= false;
    if(present){
        resolve("Student Present");
    }
    else{
        reject("Student Absent");
    }
});

otherprom
    .then(result => console.log(result))
    .catch(error => console.log(error));


//Callback example for understanding
/* function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}

fetchData((message) => {
    console.log(message);  // Logs "Data fetched" after 1 second
}); */


//3. Promise with then and catch
let promise2 = new Promise(function (resolve, reject){
    let temp_high = true;
    if(temp_high){
        resolve("Temperature High!");
    } else {
        reject("Temperature cold or average.");
    }
});

promise2
    .then(result => console.log(result))  
    .catch(error => console.log(error));


//4. Chaining promises
let promise3 = new Promise(function(resolve) {
    resolve(3);
});

promise3
    .then(answer => {
        console.log(answer);  
        return answer * 2;      //multiplies 3 by 2
    })
    .then(answer => {
        console.log(answer);  
        return answer * 3;      //multiplies 6 by 3
    })
    .then(answer => {
        console.log(answer);    //18
    });

//5 Promise.all
let prom1 = Promise.resolve(3);
let prom2 = 42;
let prom3 = new Promise((resolve) => {
    setTimeout(resolve, 3000, 'Promise 3 is resolved after three seconds');
});

Promise.all([prom1, prom2, prom3]).then(values => {
    console.log(values); 
});

//Async/Await

//1
async function getdata(){
    return ("Data recieved");           //async returns a promise
}

getdata().then(result =>{
    console.log(result);           //does not wait for anything i.e is executed in parallel
});

//2
async function asyncfunc2() {

    let promise= new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Todays weather is hot");   //logs string exactly after two seconds
        },2000)
    });

    let result= await promise;
    console.log(result);

}

asyncfunc2();

//3
//Multiple async/await
async function asyncfunc3() {

    let promise= new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Hello from first promise");   
        },6000)
    });

    let promise2= new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Hello from second promise");   
        },7000)
    });

    let result= await promise;    //waits for execution of promise one then moves ahead
    console.log(result);

    let result2= await promise2;  //waits for execution of promise two
    console.log(result2);

}

asyncfunc3();

//4
const anonymous= async () =>{
    return "This async function will not wait for anyone";
};

anonymous().then(result => console.log(result));