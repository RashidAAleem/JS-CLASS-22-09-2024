//class 22-09-2024

// // chap 21 lower case and upper case
// // lowercase is to make character small, method => .toLowerCase()
// // lowercase is to make character capital method => .toUpperCase()
// var city = prompt("Enter Your City Name")

// var lowerCaseCity = city.toLowerCase();
// var upperCaseCity = city.toUpperCase();

// var firstChar = city.slice(0, 1).toUpperCase(); // chap 22
// var remainingChar = city.slice(1).toLowerCase();

// // slice is used to slice the character from the word
// // pattern slice(index, no. of character) = slice(0, 1) => it extracts the first character from the index 0
// // pattern slice(index, no. of character) = slice(1) => it extracts the remaining character leaving first character

// document.write("<b>City Name in Lower Case: </b> "+ lowerCaseCity + "<br>")
// document.write("<b>City Name in Upper Case: </b> "+ upperCaseCity + "<br>")

// document.write("<b>sliced: </b> "+ firstChar + remainingChar + "<br>")


//ascending order

var number = [24, 53, 78, 91, 12, 152, 125];
for (var i = 0; i < number.length; i++) {
for (var j = 0; j < number.length; j++) {
    if (number[j]> number[j+1]) {
        [number[j], number[j+1]] = [number[j+1], number [j]]
        
    }
    
}
    

    
    
}
document.write(number); 


// descending order
var number1 = [24, 53, 78, 91, 12, 152, 125];
for (var i = 0; i < number1.length; i++) {
for (var j = 0; j < number1.length; j++) {
    if (number1[j]< number1[j+1]) {
        [number1[j], number1[j+1]] = [number1[j+1], number1 [j]]
        
    }
    
}
}

document.write(number1); 


// var number = [1, 2, 5, 6, 7, 8, 9];
// var missingNumbers = [];

// // Determine the minimum and maximum numbers in the array
// var minNum = number[0];
// var maxNum = number[0];

// for (let i = 1; i < number.length; i++) {
//     if (number[i] < minNum) {
//         minNum = number[i];
        
//     }
//     console.log(minNum);

//     if (number[i] > maxNum) {
//         maxNum = number[i];
//         // console.log(maxNum);
//     }
// }

// // Check for missing numbers
// for (let i = minNum; i <= maxNum; i++) {
//     if (!number.includes(i)) {
//         missingNumbers.push(i);
//     }
// }

// // Output the missing numbers
// document.write("Missing numbers: " + missingNumbers.join(", ") + "<br>");





// var number = [1, 2, 5, 6, 7, 8, 9];
// var missingNumbers = [];

// var minNum = number[0];
// var maxNum = number[0];


// for (var i = 1; i < number.length; i++) {
//     if (number[i] < minNum) {
//         minNum = number[i];
//     }
//     console.log("min", minNum)
    
//     if (number[i] > maxNum) {
//         maxNum = number[i];
//     }
// }

// // Check for missing numbers using nested loop
// for (var i = minNum; i <= maxNum; i++) {
//     var found = false; // Assume the number is not found
//     for (var j = 0; j < number.length; j++) {
//         if (number[j] === i) {
//             found = true; // Number is found
//             break; // Exit inner loop
//         }
//     }
//     if (found === false) { // If not found, it's a missing number
//         missingNumbers[missingNumbers.length] = i; // Add to missing numbers
//     }
// }

// // Output the missing numbers
// document.write("Missing numbers: ");
// for (var k = 0; k < missingNumbers.length; k++) {
//     document.write(missingNumbers[k] + " ");
// }

    

    
    


