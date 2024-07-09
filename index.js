

var words = ["Mobile","laptop","tablet","watch","led","faxmachine"];

//Getting random word from the list

var randomIndex = Math.floor (Math.random() * words.length);
var selectedWord = words[randomIndex];
console.log(selectedWord);


//to store the already guessed
var guessedlist = [];

//For initial display word

var displayWord = "";

for (var i = 0; i < selectedWord.length; i++) {
    displayWord += "_ " }

    document.getElementById("displayWord") .textContent = displayWord;

    //Function to check guessed letter 

    function guessLetter() {
        var inputElement = document.getElementById("letter-input");

//To check empty input 

if (!inputElement.value) {
    alert ("Empty input box, please add input letter")
    return;
}

var letter = inputElement.value.toLowerCase();

// Clear the input field 

inputElement.value = "";

// Check if the letter has already been guessed

if (guessedlist.includes(letter)) {
    alert ("You have already guessed that letter !");
    return;
}

//Add the letter to the guessed letters array

guessedlist.push(letter);

// Update the word display based on the guessed letters 

var updateDisplay = "";
var allLetterGuessed = true;
for (var i = 0; i < selectedWord.length; i++) {
    if (guessedlist.includes(selectedWord[i])) {
        updateDisplay += selectedWord[i] + " ";
    } else {
        updateDisplay += "_ ";
allLetterGuessed = false;
    }
    }

document.getElementById("displayWord") .textContent = updateDisplay;


// Check if all letters have been gueesed

if (allLetterGuessed) {
    alert("Congratulations! You guessed the word correctly!");
}
}
