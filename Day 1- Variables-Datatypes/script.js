// VAR 
var fruit = "apple";
console.log(fruit); // This will log "apple" to the console.

//-------------------------------------------------------------------------------

//VAR AND LET

{
    let fruit = "banana";
    console.log(fruit); // now its changed we can use the var fruit variable which means able to use anywhere in the code


    let color = "red";
    color = "blue";
    console.log(color); // able to reassign the value of 'color' because it is defined with 'let' in this block scope.
} // This will log "blue" to the console because 'color' is defined in this block scope.

{
    // color = "green";
    // console.log(color); // This will throw an error because 'color' is not defined in this scope.
}

//-------------------------------------------------------------------------------

// CONST
const vegitables = "carrot";
console.log(vegitables);
// vegitables = 'potato'; // This will throw an error because 'vegitables' is defined with 'const' and cannot be reassigned.

// VARIABLES WITH DATATYPES

// Using primitive data types

// String
let name ="abarna";
console.log(name); // This will log 'abarna' to the console because 'name' is a string.
//Number
let age = 21;
console.log(age); // This will log '21' to the console because 'age' is a number.
//Boolean
let isStudent = false;
console.log(isStudent); // This will log 'false' to the console because 'isStudent' is set to false.
//Undefined
let address;
console.log(address); // This will log 'undefined' to the console because 'address' is declared but not initialized.
//Null
let phoneNumber = null;
console.log(phoneNumber); // This will log 'null' to the console because 'phoneNumber' is explicitly set to null.
//Symbol
let uniqueId = Symbol("id");
console.log(uniqueId); // This will log a unique symbol to the console because 'uniqueId' is a symbol.
//Bigint
let bigNumber = BigInt(1234567890123456789012345678901234567890);
console.log(bigNumber); // This will log a big integer to the console because 'bigNumber' is a BigInt.
//-------------------------------------------------------------------------------

// Non-primitive data types
// Object
let person = {
    Name : "abarnavijay",
    age : 22,
    isStudent : true,
    job : "developer",
    hobbies : ["reading", "writing", "coding","youtube","hearing music"],
    // Nested object
    address :{
        city : "salem",
        state : "tamilnadu"
    }
}
console.log(person.Name);

// 2. Array ([]) -> Technically a type of object, used to store ordered data.
let colors = ["white","black","green"]
console.log(typeof colors);


// Array

let arr1 = ["apple", "banana", "orange"];
console.log ( arr1);

// function object -> Functions are special kinds of objects.
function greet(params) {
    console.log("Hello World!");
    
}
console.log(typeof greet);

// Date Object -> Used to work with dates and times.
let currdate = new Date ();
console.log(currdate);


//Write 5 examples using let and const:
let city = "Coimbatore";
const state = "Tamil Nadu"
let age1 = 26;
const Name1 = "sridhar";
let job1 = true;
console.log(city, state, age1, Name1,job1);
//Declare 2 variables for each data type with sample values:
let num1 = 21;
const samplestr = "bee"
console.log(typeof num1);
console.log(typeof samplestr);
console.log(`hello i am ${samplestr} and i am ${num1} years old.`);

