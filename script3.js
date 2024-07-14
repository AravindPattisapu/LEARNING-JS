// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//// PROBLEM :
//// WE WORK FOR A COMPANY BUILDING A SMART HOME THERMOMETER. OUR MOST RECENT TASK IS THIS : "GIVEN AN ARRAY OF TEMPERATURES OF ONE DAY, CALCULATE THE TEMPERATURE AMPLITUDE. KEEP IN MIND THAT SOMETIMES THERE MIGHT BE A SENSOR ERROR."

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

//// UNDERSTAND THE PROBLEM !
//// Q:WHAT IS TEMPERATURE AMPLITUDE?
//// A:DIFFERENCE BETWEEN HIGHEST AND LOWEST TEMPERATURE!

////Q:HOW TO CALCULATE MAX AND MIN TEMPERATURES?
////A:

////Q:WHAT IS A SENSOR ERROR? AND WHAT TO DO ABOUT IT?
////A:

//// BREAKING DOWN THE PROBLEM INTO SMALLER SUB PROBLEMS !
////-HOW TO IGNORE ERRORS
////-FIND MAX VALUE IN TEMP ARRAY
////-FIND MIN VALUE IN TEMP ARRAY
////-SUBSTRACT MIN FROM MAX AND RETURN IT

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures));

// ////PROBLEM 2 : FUNCTION SHOULD NOW RECIEVE DATA FROM 2 SETS OF ARRAYS!

// const temperatures2 = [2, 34, 5, 6, 7];

// const newArray = temperatures.concat(temperatures2);
// console.log(newArray);
// console.log(calcTempAmplitude(newArray));

//// EXCERSISE !!!
/* 
GIVEN AN ARRAY OF FORCASTED MAXIMUM TEMPERATURES,
THE THERMOMETER DISPLAYS A STRING WITH THESE TEMPERATURES.

EXAMPLE : [17, 21, 23] WILL PRINT "...17C IN 1 DAY ... 21C IN 2 DAYS ... 23C IN 3 DAYS ..."

CREATE A FUNCTION "PRINTFOREFAST" WHICH TAKES IN AN ARRAY "ARR" AND LOGS A STRING LIKE THE ABOVE TO THE CONSOLE.

USE THE PROBLEM-SOLVING FRAMEWORK: UNDERSTAND THE PROBLEM AND BREAK IT UP INTO SUB-PROBLEMS!

TEST DATA 1 : [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 0, 4]
*/

// const printForecast = function (arr) {
//   const day = 1;
//   let forecast = ``;

//   for (let i = 0; i < arr.length; i++) {
//     forecast += `...${arr[i]}C in ${day + i} day`;
//   }
//   return forecast;
// };

// console.log(printForecast([12, 5, -5, 0, 4]));
