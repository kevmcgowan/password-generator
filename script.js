// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Function to prompt user for password options
function generatePassword() {
  var selectedCharacters = []
  var passwordLength = prompt('Enter your password between 10 & 64');
  while (passwordLength < 10 || passwordLength > 64) {
    alert('Enter a length between 10 & 64 characteres!');
    var passwordLength = prompt('Enter your password between 10 & 64');
  }
  var passwordSpecial = confirm('Do you require special character?');
  if (passwordSpecial) {
    selectedCharacters.push(specialCharacters);
  } 
  var passwordNumeric = confirm('Do you require numeric character?');
  if (passwordNumeric) {
    selectedCharacters.push(numericCharacters);
  }
  var passwordLowerCase = confirm('Do you require lower case characters?');
  if (passwordLowerCase) {
    selectedCharacters.push(lowerCasedCharacters);
  }
  var passwordUpperCase = confirm('Do you require upper case characters?');
  if (passwordUpperCase) {
    selectedCharacters.push(upperCasedCharacters);
  }
  else if (passwordSpecial == false && passwordNumeric == false && passwordLowerCase == false && passwordUpperCase == false) {
    alert("Please choose at least one character type to generate password"); {
        generatePassword()
    }
  }
  // Create an new array out the selected character set
  var allSelectedCharacters = selectedCharacters.flat();
  
  
  // Function to generate password with user input
  let randomPassword = '';
 for (let index = 0; index < passwordLength; index++) {
  var randomNumber = (allSelectedCharacters[Math.floor(Math.random() * allSelectedCharacters.length)]);

  randomPassword = randomPassword + randomNumber;
 }
 return randomPassword;
}






// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);