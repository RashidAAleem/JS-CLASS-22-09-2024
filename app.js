// //class 22-09-2024

// // // // chap 21 lower case and upper case
// // // lowercase is to make character small, method => .toLowerCase()
// // // lowercase is to make character capital method => .toUpperCase()
// // var city = prompt("Enter Your City Name")

// // var lowerCaseCity = city.toLowerCase();
// // var upperCaseCity = city.toUpperCase();


// // // chap 22

// // var firstChar = city.slice(0, 1).toUpperCase(); 
// // var remainingChar = city.slice(1).toLowerCase();

// // // slice is used to slice the character from the word
// // // pattern slice(index, no. of character) = slice(0, 1) => it extracts the first character from the index 0
// // // pattern slice(index, no. of character) = slice(1) => it extracts the remaining character leaving first character

// // document.write("<b>City Name in Lower Case: </b> "+ lowerCaseCity + "<br>")
// // document.write("<b>City Name in Upper Case: </b> "+ upperCaseCity + "<br>")

// // document.write("<b>sliced: </b> "+ firstChar + remainingChar + "<br>")


// //ascending order

// // var number = [24, 53, 78, 91, 12, 152, 125];
// // for (var i = 0; i < number.length; i++) {
// // for (var j = 0; j < number.length; j++) {
// //     if (number[j]> number[j+1]) {
// //         [number[j], number[j+1]] = [number[j+1], number [j]]
        
// //     }
    
// // }
    

    
    
// // }
// // document.write(number); 


// // descending order
// // var number1 = [24, 53, 78, 91, 12, 152, 125];
// // for (var i = 0; i < number1.length; i++) {
// // for (var j = 0; j < number1.length; j++) {
// //     if (number1[j]< number1[j+1]) {
// //         [number1[j], number1[j+1]] = [number1[j+1], number1 [j]]
        
// //     }
    
// // }
// // }

// // document.write(number1); 


// // var number = [1, 2, 5, 6, 7, 8, 9];
// // var missingNumbers = [];

// // // Determine the minimum and maximum numbers in the array
// // var minNum = number[0];
// // var maxNum = number[0];

// // for (let i = 1; i < number.length; i++) {
// //     if (number[i] < minNum) {
// //         minNum = number[i];
        
// //     }
// //     console.log(minNum);

// //     if (number[i] > maxNum) {
// //         maxNum = number[i];
// //         // console.log(maxNum);
// //     }
// // }

// // // Check for missing numbers
// // for (let i = minNum; i <= maxNum; i++) {
// //     if (!number.includes(i)) {
// //         missingNumbers.push(i);
// //     }
// // }

// // // Output the missing numbers
// // document.write("Missing numbers: " + missingNumbers.join(", ") + "<br>");





// // var number = [1, 2, 5, 6, 7, 8, 9];
// // var missingNumbers = [];

// // var minNum = number[0];
// // var maxNum = number[0];


// // for (var i = 1; i < number.length; i++) {
// //     if (number[i] < minNum) {
// //         minNum = number[i];
// //     }
// //     console.log("min", minNum)
    
// //     if (number[i] > maxNum) {
// //         maxNum = number[i];
// //     }
// // }

// // // Check for missing numbers using nested loop
// // for (var i = minNum; i <= maxNum; i++) {
// //     var found = false; // Assume the number is not found
// //     for (var j = 0; j < number.length; j++) {
// //         if (number[j] === i) {
// //             found = true; // Number is found
// //             break; // Exit inner loop
// //         }
// //     }
// //     if (found === false) { // If not found, it's a missing number
// //         missingNumbers[missingNumbers.length] = i; // Add to missing numbers
// //     }
// // }

// // // Output the missing numbers
// // document.write("Missing numbers: ");
// // for (var k = 0; k < missingNumbers.length; k++) {
// //     document.write(missingNumbers[k] + " ");
// // }

    
// //CHAP 23 STRINGS: FINDING SEGMENTS
// // Prompt for input text
// var text = prompt("Enter your text:");

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }

// // Display the updated text
// alert("Updated text: " + text);



// Task One
 // Capitalize hello World

//  var text = "hello world";
// document.write (text + "<br>")

// var cap = text.toUpperCase();
// document.write ("Capital : " +  cap + "<br>")

// var firstChar = text.slice(0,1).toUpperCase() + text.slice(1)
// document.write ("First Letter : " + firstChar + "<br>")

// var firstChars = text.slice(0,1).toUpperCase() + text.slice(1,5)  
// var secondChars = text.slice(6, 7).toUpperCase() + text.slice(7); 
// document.write ("First Letter : " + firstChars +  secondChars + "<br>")

// var firstChars = text.slice(0,1).toUpperCase() + text.slice(1,5) + text.slice(6, 7).toUpperCase() + text.slice(7)  
// document.write ("First Letter : " + firstChars)


// var text = "Saylani mass it training program";
// document.write ("Text : " + text + "<br>")

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i+8) === "training") {
//         document.write("found! : " + text.slice( i, i+8))
        
//     }
    
// }


// // Prompt for input text
// var text = prompt("Please enter your words:");
// var result = ""; 
// var capitalizeNext = true; 

// for (let i = 0; i < text.length; i++) {
//     var currentChar = text[i];

    
//     if (currentChar === " ") {
//         result += currentChar; // Add the space to the result
//         capitalizeNext = true; // Set flag to capitalize next character
//     } else {
//         // Capitalize if the flag is set
//         if (capitalizeNext) {
//             result += currentChar.toUpperCase();
//             capitalizeNext = false; // Reset the flag after capitalizing
//         } else {
//             result += currentChar.toLowerCase(); // Otherwise, add the lowercase character
//         }
//     }
// }

// // Display the result
// document.write("Actual Text : "+ text +"<br>" +"Capitalized Text: " + result);



// dated : 29-09-2024 Chap 23

// task 1 . string to capitalize using prompt
// every letter capitalize

// var str = prompt("Enter your Sentence")
// var word = str.split(" ");
// // console.log(word);
// var arry = []
// // document.write ("Original: " + str + "<br>")

// // var first= str.slice(0,1).toUpperCase() + str.slice(1)
// // document.write(first)

// for (var i = 0; i < word.length; i++) {
//    var result =(word[i][0].toUpperCase()+word[i].slice(1));
//    arry.push(result);
    
// }

// document.write(arry.join(" "));

// index of
// var word = prompt("Please enter ")
// document.write( word.indexOf("a"))
// document.write( word.lastIndexOf("a"))

// task 2 . in a paragraph find smit using slice
//  var text = "hello i am saylani mass it training student"
//  for (let i = 0; i < text.length; i++) {
//     if (text.slice(i, i+7) ==="saylani") {
//         document.write("saylani found")
//         break;
//     }
    
//  }
//  var word = text.slice(11, 18 )
// document.write(word)


// task 3 . in a paragraph find smit using indexof

// var text = "hello i am saylani mass it training student";
// var firstChar = text.indexOf("saylani");

// if (firstChar !== -1) {
//     document.write("Found Saylani");
// } else {
//     document.write("Saylani not found");
// }

// task 4 . in a paragraph find saylani using replace
// var text = "hello i am saylani mass it training student"
// var word = text.replaceAll("saylani", "SAYLANI" )
// document.write(word)


// dated 13-10-2024


// FUNCTION


//q1
// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     // document.write("time:" + theHr + ":" +theMin)
// document.write(now)
    
// }

// tellTime();

//q2
// function greet() {
//     var firstName = prompt("Enter First Name")
//     var lastName = prompt("Enter last Name")
//     var greetings = "Hello"
//     document.write(greetings +" " + firstName +" "+ lastName) 
// }

// greet()

//q3

// function additionNum() {
//     var firstNum = +prompt("Please Enter first Number")
//     var secNum = +prompt("Please Enter second Number")
//     var sumNum = firstNum + secNum
//     alert("Here is your answer "+sumNum)
// }

// additionNum()


//q4

// function calc() {
//     var firstNum = +prompt("Please Enter first Number");
//     var secNum = +prompt("Please Enter second Number");
//     var operator = prompt("Please Enter + OR - OR * OR /");
//     var result;

//     if (operator === '+') {
//         result = firstNum + secNum;
//     } else if (operator === '-') {
//         result = firstNum - secNum;
//     } else if (operator === '*') {
//         result = firstNum * secNum;
//     } else if (operator === '/') {
//         if (secNum !== 0) {
//             result = firstNum / secNum;
//         } else {
//             result = "Error: Division by zero";
//         }
//     } else {
//         result = "Error: Invalid operator";
//     }

//     alert("Here is your answer: " + result);
// }
// calc();

// function updateClock() {
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
    

//     // Pad single digits with leading zeros
//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;

//     // Format the time string
//     var timeString = hours + ":" + minutes + ":" + seconds;

//     // Clear the document and write the new time
//     document.body.innerHTML = ""; // Clear previous content
//     document.write("<h1>" + timeString + "</h1>"); // Write the current time
// }

// // Update the clock every second
// setInterval(updateClock, 1000);
// updateClock(); // Initial call to display the clock immediately

// function updateClock() {
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
    
//     // Determine AM or PM
//     var period = hours >= 12 ? "PM" : "AM";
    
//     // Convert to 12-hour format
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'

//     // Pad single digits with leading zeros
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;

//     // Format the time string
//     var timeString = hours + ":" + minutes + ":" + seconds + " " + period;

//     // Clear the document and write the new time
//     document.body.innerHTML = ""; // Clear previous content
//     document.write("<h1>" + timeString + "</h1>"); // Write the current time
// }

// // Update the clock every second
// setInterval(updateClock, 1000);
// updateClock(); // Initial call to display the clock immediately


//18-10-2024 class



// function telltime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     // document.body.innerHTML = "";
//     document.write("time: " + theHr +" : "+ theMin + "<br>");
    
// }

// telltime();
// telltime();
// telltime();
// telltime();
// telltime();
// telltime();

//passing data to function
// in the form of arguement and can be pass on as parameters

// function hello(greet) {   // parameters
//     alert(greet)
    
// }

// hello("Hi There"); // arguments


// multiple arguments can be passed on parameters and to display without parameter we use arguments method to be 



// function additionNum(a,b) {

//     console.log(a+b)
    
// }


// additionNum(2,3)
// additionNum(5,8)

// function subtrationNum(c,d) {

//     console.log(c-d)
    
// }


// subtrationNum(3,2)
// subtrationNum(10,2)

// function multNum(c,d) {

//     console.log(c*d)
    
// }


// multNum(2,3)
// multNum(4,3)

// function divNum(c,d) {

//     console.log(c/d)
    
// }


// divNum(2,3)
// divNum(5,3)



// returning value to the function

// function abc() {
//     var xyz = "world"
//     return xyz;
// }

// var a = abc()
// document.write(abc())



//switch case
// var dayOfWk = "Sun"
//  if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
//      alert("Whoopee!");
//      }
//      else if (dayOfWk === "Fri") {
//      alert("TGIF!");
//      }
//      else {
//      alert("Shoot me now!");
//      }


    //   switch(dayOfWk) {
    //      case "Sat" :
    //      alert("Whoopee");
    //      break;
    //      case "Sun" :
    //      alert("Whoopee");
    //      break;
    //      case "Fri" :
    //      alert("TGIF!");
    //      break;
    //      default :
    //      alert("Shoot me now!");
    //      }
        