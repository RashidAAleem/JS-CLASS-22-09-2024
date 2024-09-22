//class 22-09-2024

// chap 21 lower case and upper case
// lowercase is to make character small, method => .toLowerCase()
// lowercase is to make character capital method => .toUpperCase()
var city = prompt("Enter Your City Name")

var lowerCaseCity = city.toLowerCase();
var upperCaseCity = city.toUpperCase();

var firstChar = city.slice(0, 1).toUpperCase(); // chap 22
var remainingChar = city.slice(1).toLowerCase();

// slice is used to slice the character from the word
// pattern slice(index, no. of character) = slice(0, 1) => it extracts the first character from the index 0
// pattern slice(index, no. of character) = slice(1) => it extracts the remaining character leaving first character

document.write("<b>City Name in Lower Case: </b> "+ lowerCaseCity + "<br>")
document.write("<b>City Name in Upper Case: </b> "+ upperCaseCity + "<br>")

document.write("<b>sliced: </b> "+ firstChar + remainingChar + "<br>")

