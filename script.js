// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare Variables:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specChar = ["!", "@", "#", "$", "%","^", "&", "*", "(", ")"];
let myPassword = ""

const passwordGenerated = []

// const password = {
//  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//  specChar: ["!", "@", "#", "$", "%","^", "&", "*", "(", ")"],

//  passwordGenerated: []
// }
// Make charset into separate arrays for numbers, spec. character, lower, upper case. DEPENDING ON WHAT THEY CHOOSE YOU WILL COMBINE THE ARRAYS INTO ONE TO THEN RANDOMIZE THE ARRAY UP TO THE PASSWORD LENGTH

//You'll need concat to combine arrays

function newPassword() {

  //Determine Password Length
const passwordLength = prompt("Please enter a length of your desired password between 8 and 128 characters");
if(passwordLength < 8 || passwordLength > 128){
  alert("ERROR: Please enter a value greater than 8 and less than 128");
  return;
  
}


const numbersConfirm = confirm("Would you like to include numbers?");
const lowerCaseConfirm = confirm("Would you like to include lowercase letters?");
const upperCaseConfirm = confirm("Would you like to include uppercase letters?");
const specCaseConfirm = confirm("Would you like to include special characters?");

//This confirms that there is at least one selection

if(numbersConfirm === false && lowerCaseConfirm === false && upperCaseConfirm === false && specCaseConfirm === false){
  alert("ERROR: Please select at least one criteria to create a password");
  return;
}

 // Console Logs
// console.log(passwordLength);
// console.log(lowerCaseConfirm);
// console.log(numbersConfirm);
// console.log(upperCaseConfirm);
// console.log(specCaseConfirm);


//If you choose yes, than use it in a password in a random setting

 if(numbersConfirm === true && lowerCaseConfirm === false && upperCaseConfirm === false && specCaseConfirm === false) {

 for (let index = 0; index < passwordLength; index++) {
   const password = numbers[Math.floor(Math.random() * numbers.length)];
  myPassword = numbers + password;

  document.getElementById("password").value = myPassword;
  return;
 }
 }
//It's a little closer, it shows numbers that are separated by a comma and do not match passwordLength



//  for (let index = 0; index < passwordLength; index++) {
//   const lowerCaseGen = lowerCase[Math.floor(Math.random() * lowerCase[index] )];
//   console.log(lowerCaseGen);
//    passwordGenerated = passwordGenerated.concat.lowerCaseGen
//    console.log(passwordGenerated);
  
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
