// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked the button.");

// Prompt the user for password criteria
  // Length of password between 8 - 128
  // Lowercase, uppercase, numbers, special characters
// Validate input
// Display password on the page

  return "Generated Password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
