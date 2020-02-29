var passwordLength = document.getElementById("password-length");
var upperCase = document.querySelector("#uppercase");
var lowerCase = document.querySelector("#lowercase");
var specialChar = document.querySelector("#special");
var numeric = document.querySelector("#numeric");
var submit = document.querySelector("#submit-button")
var printPassword = document.getElementById("print-password")
var clear = document.getElementById("clear");

var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = alphabet.split(" ");
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = "! @ # $ % ^ & * ( )"
var specialCharArray = specialChars.split(" ");
var penultimateArray = [];
var finalArray = [];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    }

function pickAmount(array) {
    for (let i = 0; i < passwordLength.value; i++) {
    var randomNumber = Math.floor(Math.random() * array.length);
    finalArray.push(array[randomNumber]);
    }   
    }

function clearFunction() {
    window.location.reload();
    }

  
function checkPasswordLength() {
    event.preventDefault();
    console.log(passwordLength.value);
    if (passwordLength.value == 0) {
    alert("Must pick a password length.")
    printPassword = "";
    }
    else if (passwordLength.value < 8) {
    alert("Password must be at least 8 characters long."); 
    printPassword = "";
    }
    else if (passwordLength.value > 128) {
    alert("Password must be no more the 128 characters long.")
    printPassword = "";
    }

    };

function mustCheckOne() {
    if (upperCase.checked == false && lowerCase.checked == false && specialChar.checked == false && numeric.checked == false) {
        alert("Must pick at least one character-type.");
    }
    };

function pickFromArray() {
    
    
    for (let i = 0; i < 128; i++) {
        
    if (lowerCase.checked == true)  {
        
        var randomNumber = Math.floor(Math.random() * lowerCaseArray.length);
        penultimateArray.push(lowerCaseArray[randomNumber]);     
    };

    if (upperCase.checked == true)  {
        var randomNumber = Math.floor(Math.random() * lowerCaseArray.length);
        penultimateArray.push(lowerCaseArray[randomNumber].toUpperCase());  
    };

    if (numeric.checked == true)  {
        var randomNumber = Math.floor(Math.random() * numericArray.length);
        penultimateArray.push(numericArray[randomNumber]);    
    };

    if (specialChar.checked == true) {
        var randomNumber = Math.floor(Math.random() * specialCharArray.length);
        penultimateArray.push(specialCharArray[randomNumber]);
    };

    shuffle(penultimateArray);

    console.log(penultimateArray.join(''));}

    pickAmount(penultimateArray);

    printPassword.textContent = finalArray.join('');

};



clear.addEventListener("click", clearFunction)
submit.addEventListener("click", checkPasswordLength);
submit.addEventListener("click", mustCheckOne);
submit.addEventListener("click", pickFromArray);





