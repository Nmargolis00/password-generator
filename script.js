// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare Variables:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specChar = ["!", "@", "#", "$", "%","^", "&", "*", "(", ")"];

const passwordGenerated = []

// Make charset into separate arrays for numbers, spec. character, lower, upper case. DEPENDING ON WHAT THEY CHOOSE YOU WILL COMBINE THE ARRAYS INTO ONE TO THEN RANDOMIZE THE ARRAY UP TO THE PASSWORD LENGTH

//You'll need concat to combine arrays

function newPassword() {

const passwordLength = prompt("Please enter a length of your desired password between 8 and 128 characters");
if(passwordLength < 8 || passwordLength > 128){
  alert("ERROR: Please enter a value greater than 8 and less than 128");
  return;
  
}


const numbersConfirm = confirm("Would you like to include numbers?");
const lowerCaseConfirm = confirm("Would you like to include lowercase letters?");
const upperCaseConfirm = confirm("Would you like to include uppercase letters?");
const specCaseConfirm = confirm("Would you like to include special characters?");


//Determine Password Length

// write a function that will prompt for a password



//( 3 < x < 9); you can do it that way but it may be more difficult than writing this into two statements


// After you get the simple way to work you can try this out


console.log(passwordLength)



}
// Then use confirms to define yes or no questions


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", newPassword);
