// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare Variables:

let charset ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Make charset into separate arrays for numbers, spec. character, lower, upper case. DEPENDING ON WHAT THEY CHOOSE YOU WILL COMBINE THE ARRAYS INTO ONE TO THEN RANDOMIZE THE ARRAY UP TO THE PASSWORD LENGTH

//You'll need concat to combine arrays

const passwordLength = prompt("Please enter a length of your desired password between 8 and 128 characters", "");


//Determine Password Length

// write a function that will prompt for a password

generateBtn.onclick => () {

}

//( 3 < x < 9); you can do it that way but it may be more difficult than writing this into two statements


// After you get the simple way to work you can try this out
if (passwordLength < 8 && passwordLength > 128){
  alert("Please enter a number between 8 and 128 to be able to make a sick password");
  return null;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
