/*

*
**
*** 
****
*****
****
***
**
*

*/

// Creating "Random" Numbers using JavaScript.
Math.random(); // Creates a random number between 0 and 1;
Math.ceil(); // Takes in a number and rounds it up.
Math.floor(); // Takes in a number and rounds it down.
Math.round(); // Takes in a number and rounds based on decimal value.

var randomNumberWithDecimal = (Math.random() * 10) + 1;
var myRandomNumber =  Math.floor(randomNumberWithDecimal);

console.log(myRandomNumber);




// the double plus operator will take the current value of the variable and add a 1 to it and also replace the old value of the variable.
// myVariable++;
// myVariable = myVariable + 1; Does the same thing as previous line.

var asteriskString = "*";
var pyramidSpeed = "****";
var pyramidHeight = 6;


for (var counter = 0; counter < pyramidHeight; counter++) {
    
    console.log(asteriskString);
    asteriskString = asteriskString + pyramidSpeed;

}