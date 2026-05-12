// console.log("Hello world");
// alert("Its time to start again");

// Variables are like a countainer use to store data
// A variable behaves as if it was the value that it countains

// Two steps
// 1. Declare variable (let var const)
// 2. Assigment (= assigment operator)

let firstName = "Bro"; //string
let age = 21; //number
let student = true; //boolean

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years Old";
document.getElementById("p3").innerHTML = "Enrolled " + student;
