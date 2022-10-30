
var characterLength = 8;
var choiceArr = [];

var specialCharacterArr = ["!","@","#","$","%","^","&","*","(",")"]
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ["1","2","3","4","5","6","7","8","9","0"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
}

  function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
    }
    return password;
}

// Prompt the user for password criteria
  // Length of password between 8 - 128
  // Lowercase, uppercase, numbers, special characters
function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want for your password? (8 - 128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number from 8 - 128.");
    return false;
  }

  if (confirm("Include lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (confirm("Include uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Include special characters?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }

  if (confirm("Include numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}
