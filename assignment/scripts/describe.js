// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// line 36 is declaring a variable (name), and assigning the string 'Dane' to to that variable
// lines 38 checks if the value stored in the variable (name) matches the string 'Mary'. If that condition evaluates to truem it runs the code block in the curly braces
// The code in the braces prints the string "Hi, Mary!" to the console
// If the condition in the brackets of line 38 do not evaluate to true(in this example it evaluates to false), the code block in the curly brackets following else
// these curly brackets print the string "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// line 56 declares an empty variable named secret
// line 58 declares a variable named code and assigns the integer value 123 to it
// lines 60-63 check if the value in the variable code is equal to 123. because it is, it assigns the string "super" to the variable secret, and multiplies the value of code by 2 (now code = 246)
// lines 65-67 check if the value of the variable is less than 250. It is, so it runs the code block setting the value of the variable secret to the string "duper"
// line 69 logs the value of the variable secret (which is now the string "duper") to the console

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Lines 82-84 declare 3 variables isStudent is true, age is 34, and zip is 55407
// line 86 checks if isStudent is true and if the zip is larger than 80000. It is not true so it skips the code block and checks the next condition
// line 88 checks if isStudent is false or if age is less than 30. Neither of these evaluate to true, so it also skips this code block and checks the next conditional
// line 90 checks if isStudent is true. It is, so it logs the string "Welcome to Prime" to teh console. 
// line 92 only runs if all of the proceeding conditions were not met, so it does not log 'How about the weather' to the console

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//colorOne and colorTwo are reversed from the description... it does not seem to matter in how the code runs, but should be fixed for consistency
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// only colorOne is is being reassigned the value 'purple' a line of code assinging colorTwo the value 'purple' should be added inside the curly brackets
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
//time is typically something you would want your code to be able to reassign a value to, so it should likely be declared using let rather than const
let temp = 40;
const time = 4;

// the conditional is using the or operator. Replace || with && to check if both conditions are met before running the code block
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//the code block for if and else should be swapped to allow entry if the min age condition is met
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

