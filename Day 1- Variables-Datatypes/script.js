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
vegitables = 'potato'; // This will throw an error because 'vegitables' is defined with 'const' and cannot be reassigned.
