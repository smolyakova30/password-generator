// Assignment code here

// arrays with possitble criteria in password
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
            "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", 
            "`", "{", "|", "}", "~", " "];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];    

lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
         "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
                  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];         

//varibale wich use in generatepPassword function
let passwordLength;
let passwordNumber;
let passwordLowerLetters;
let passwordUpperLetters;
let criteria;

// Function to generate password

function generatePassword() {
    passwordLength = parseInt(prompt(`What is desire length of your password? Enter number between 8 and 128`))
  if (!passwordLength){
    alert(`Please, enter the value between 8 and 128`)
    //negative scenario: invalid password length
  }else if (passwordLength < 8 || passwordLength > 128){
    passwordLength = parseInt(prompt(`You password length must be between 8 to 128. Please enter valid length. `))
  } else if (passwordLength >= 8 && passwordLength <=128) {
    // possible critaria which can be selected
    passwordNumber = confirm(`Would you like to inlude NUMBERS into your password?`);
    passwordCharacter = confirm(`Would you like to inlude SPECIAL CHARACTERS into your password?`);
    passwordLowerLetters = confirm(`Would you like to inlude LOWER LETTERS into your password?`);
    passwordUpperLetters = confirm(`Would you like to inlude UPPER LETTERS into your password?`);
  } else {
  // negative scenario: none of the critaria choosen be the user
    while(passwordNumber === false && passwordCharacter === false && 
          passwordLowerLetters === false && passwordUpperLetters === false) {
    alert("You must choose at least one parameter to amke your password more secure!");
    passwordNumber = confirm(`Would you like to inlude NUMBERS into your password?`);
    passwordCharacter = confirm(`Would you like to inlude SPECIAL CHARACTERS into your password?`);
    passwordLowerLetters = confirm(`Would you like to inlude LOWER LETTERS into your password?`);
    passwordUpperLetters = confirm(`Would you like to inlude UPPER LETTERS into your password?`); 
  } 
} 
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());