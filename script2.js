`use strict`;

//FUNCTIONS!!!


//FUNCTION DECLARATION  function(){}

// function logger() {
//     console.log(`My name is Aravind`);
// }
// logger()


// function fruitProcessor(apples, oranges) { 
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);


//FUNCTION EXPRESSION  x = function(){}

// const age = function(birthYear){
//     return 2024 - birthYear;
// }
// console.log (age(1996))


// ARROW FUNCTION =>

// const calculateAge = birtYear => 2024 - birtYear;
// console.log(calculateAge(1996))


// const yearsUntilRetirement = (firstName, birthYear) =>{
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years!`;
// }
// console.log(yearsUntilRetirement(`Aravind`,1996))


// FUNCTIONS CALLING OTHER FUNCTIONS

// const fruitCutting = function(fruit){
//     return fruit*6;
// }
// const fruitProcessor = function(apples, oranges){
//     const applePieces = fruitCutting(apples);
//     const orangePieces = fruitCutting(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange!`;
//     return juice;
// }
// console.log (fruitProcessor(2,3))


// const calculateAge = function(birthYear){
//     return 2024 - birthYear;
// }

// const yearsUntilRetirement = function(firstName,birthYear){
//     const age = calculateAge(birthYear);
//     const retirement = 65 - age;
    
//     if( retirement>0 ) {
//         console.log(`${firstName} retires in ${retirement} years!`)
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(`Aravind`, 1996))



//PRACTISE !! 

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const avgScore = (a,b,c) => (a+b+c)/3;

// const scoreDolphins = avgScore(44,23,71);
// const scoreKoalas = avgScore(65,54,49);

// const checkWinner = function ( avgDolphins, avgKoalas){
//     if (avgDolphins >= (avgKoalas*2)){
//         console.log(`Dolfins win(${avgDolphins} vs ${avgKoalas})`)
//     }else if (avgKoalas >= (avgDolphins*2)){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     }else {
//         console.log(`No team wins!`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);



// // ARRAYS 

// // LITERAL SYNTAX (USUAL SYNTAX)
// const friends = [`Aravind`, `Bhanu`, `Shailesh`, `Manoj`];

// //GETTING OUT DATA 
// console.log (friends[0]);
// console.log (friends[2]);
// console.log (friends.length);
// console.log (friends[friends.length-1]);

// //LOGGING NEW DATA/ REPLACE DATA
// friends[2] = `Apoorva`;

// //CANNOT DO THIS!!
// friends = [`bob`, `mohmed`]

// //USING ARRAYS TO STORE ARRAYS
// const firstName = `Aravind`
// const Aravind = [firstName, `Pattisapu`, 1996, `Developer`, friends]

// //ARRAY FUNCTION WITH KEYWORD(ANOTHER WAY TO STORE ARRAYS)
// const years = new Array(1996, 1995, 1994, 1992);


//EXCERSISE 

// const calcAge = function(birthYear){
//     return 2024 - birthYear;
// }

// const years = [1996, 1997, 1998, 1992];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
// console.log(ages);


//BASIC ARRAY OPERATIONS 

// // ADD ELEMENTS
// const friends = [`Aravind`, `Bhanu`, `Shailesh`, `Manoj`];

// //ADDS NEW ELEMENTS TO THE END
// const newFriends = friends.push(`Apoorva`);
// console.log(friends);

// //ADDS NEW ELEMENTS TO THE BEGINNING 
// friends.unshift(`Carlo`); 
// console.log(friends);

// //REMOVE ELEMENTS 

// //REMOVES LAST ELEMENT 
// friends.pop();
// console.log(friends);

// //CAN SAVE ELEMENT GETTING REMOVED 
// const popped = friends.pop()
// console.log(popped);
// console.log(friends);

// //REMOVE FIRST ELEMENT 
// friends.shift();
// console.log (friends);

// //INDEXING
// console.log(friends.indexOf(`Aravind`));

// //INDEX CHECKING (BOOLEAN)
// console.log(friends.includes(`Aravind`));
// console.log(friends.includes(`Kenny`));

// if (friends.includes(`Shailesh`)){
//     console.log(`You have a friend caled Shailesh`);
// }


////PRACTISE!!

/*Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.*/

// const calcTip = function(bill){
//     if (bill>=50 && bill<=300){
//         const tip = bill*0.15;
//         return tip;
//     }else{
//         const tip = bill*0.20;
//         return tip;
//     }
// }

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     bill * 0.20;
// }

// const bills = [124,555,44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips);

// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(totals);



//// OBJECTS {a:b, c:d}

// const Aravind = {
//     firstName : `Aravind`,
//     lastName : `Pattisapu`,
//     age : 2024 - 1996,
//     job : `Developer`,
//     friends : [`Shailesh`, `Bhanu`, `Manoj`]
// };

// console.log (Aravind.friends);

// const nameKey = `Name`;
// console.log (Aravind[`last`+ nameKey]);

//// USE BRACKET NOTATION IN CASES LIKE THIS SO THAT DATA CAN BE ACCESED BY JS []
// const intrestedIn = prompt(`What do you wana know about Aravind? choose between firstName, lastName, age, job, and friends`);
// if (Aravind[intrestedIn]){
//     console.log(Aravind[intrestedIn]);
// }else{
//     console.log(`Wrong request!,choose between firstName, lastName, age, job, and friends.`);
// }

////ADDING ADDITIONAL DATA LATER
// Aravind.location = `London`;
// Aravind.email = `aravindpattisapu@gmail.com`
// console.log(Aravind.email)


//// CHALLANGE 
////  WRITE `ARAVIND HAS 3 FRIENDS, AND HIS BEST FRIENDS NAME IS CALLED SHAILESH`

// const sentense = `${Aravind.firstName} has ${Aravind.friends.length} friends, and his best friend is called ${Aravind.friends[0]}.`
// console.log (sentense)


// THIS KEYWORD 

// const Aravind = {
//     firstName : `Aravind`,
//     lastName : `Pattisapu`,
//     birthYear : 1996,
//     job : `Developer`,
//     friends : [`Shailesh`, `Bhanu`, `Manoj`],
//     hasDriversLicense : true,
//     calcAge: function(){
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     }
// };
// console.log(Aravind.calcAge())
// console.log(Aravind.age);

////CHALLANGE
////`Aravind is a 28 year old developer, and he has/not a drivers license 

//// YOU ARE FORGETTING TO USE "RETURN" WHICH IS EAST TO WRITE< SEE THIS BELOW!!!
////YOU ARE ALSO FORGETTING () IF IT IS CALLING FUNCTION INSISE OF AN OBJECT!!! LIKE THIS console.log(Aravind.getSummary"""()"""");

// const Aravind = {
//     firstName : `Aravind`,
//     lastName : `Pattisapu`,
//     birthYear : 1996,
//     job : `Developer`,
//     friends : [`Shailesh`, `Bhanu`, `Manoj`],
//     hasDriversLicense : true,
//     calcAge: function(){
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },
//     getSummary : function(){
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} drivers license.`
//     }
// };

// console.log(Aravind.getSummary());



////CODING CHALLANGE !!!

//// let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

//// Your tasks:

//// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

//// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

//// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

//// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const mark = {
//     fullName: `Mark Miller`,
//     mass : 78,
//     height : 1.69,
//     calcBMI : function(){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi;
//     }
// }
// const john = {
//     fullName: `John Smith`,
//     mass : 92,
//     height : 1.95,
//     calcBMI : function(){
//         this.bmi = this.mass/(this.height*this.height);
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log (mark.bmi, john.bmi)

// if (mark.bmi> john.bmi){
//     console.log (`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// }else{
//     console.log (`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }



//// LOOPS 

//// FOR LOOP 

//// FOR LOOP KEEPS RUNNING WHILE CONDITION IS TRUE!!

// for(let rep = 1; rep <= 30; rep++){    //rep++ is nothing but (rep = rep + 1)
//     console.log(`Lifting weights repetition ${rep}`);
// }


//// LOOPING ARRAYS (GETTING DATA OUT OF ARRAYS)

// const aravind = [
//     `Aravind`,
//     `Pattisapu`,
//     2024-1996,
//     `Developer`,
//     [`Carlo`, `Kenny`, `Bhanu`]
// ];

// for(let i = 0; i < aravind.length; i++) {
//     console.log(aravind[i]);
// }


// const years = [1996, 1995, 1994, 1993];
// let age = [];

// for (i=0; i<years.length; i++){

//     //// REMEMBER PUSH FROM ADDING VALUES TO ARRAYS ??!!
//     age.push(2024 - years[i]);

//     ////OR YOU CAN DO IT THIS WAY
//     ////age [i] = 2024 - years[i];
// }
// console.log(age);

//// """CONTINUE""" THE LOOP

// const aravind = [
//     `Aravind`,
//     `Pattisapu`,
//     2024-1996,
//     `Developer`,
//     [`Carlo`, `Kenny`, `Bhanu`]
// ];

//// CONTINUE IS JUST A KEYWORD AFTER IF STATEMENT AS YOU CAN SEE BELOW! WHAT WE ARE DOING DOWN HERE IS, CREATING AN IF STATEMENT WITH CONTINUE KEYWORD ! INSIDE THE LOOP, SO THAT WE CAN ONLY GET OUT STRINGS FROM THE ARRAY!!
////WHAT CONTINUE WILL DO IS EXIT CURRENT ITERATION IMMEDIATLY AND GO TO THE NEXT ONE !!!! 

// for (let i = 0; i < aravind.length; i ++){
//     if (typeof aravind[i] !== `string`) continue;
//     console.log(aravind[i], typeof aravind[i]);
// }



//// """BREAK""" THE LOOP 

//// BREAK COMPLETELY BREAKS THE LOOP IF THE CONDITION IS TRUE!!!! LIKE THE IF STATEMENT BELOW IF IT IS TRUE THEN THE LOOP WILL BREAK!!!
//// BREAKING THE LOOP USING IF STATEMENT AND BREAK KEYWORD ALONG WITH IT!!!!

// for (let i = 0; i < aravind.length; i++){
//     if (typeof aravind[i] === `number`) break;
//     console.log(aravind[i], typeof aravind[i]);
// }



////RUNNING THE LOOP BAKWARD TO GET DATAT FROM THE ARRAY BACKWARDS


// const aravind = [
//     `Aravind`,
//     `Pattisapu`,
//     2024-1996,
//     `Developer`,
//     [`Carlo`, `Kenny`, `Bhanu`]
// ];

//// """i = aravind.length - 1""" IS FOR GETTING THE DATA BACKWARDS, WITHOUT HARD CODING IT LIKE """i = 4"" I CODED IT SMARTLY!!!! 
//// """ 4, 3,.....,0  """ SO THE MIDDLE CONDITION SHOULD BE TRUE IF THE VALUE IS EQUAL OR ABOVE 0 ""i >= 0""
//// INSTEAD OF USING """i++"" LIKE BEFORE TO INCREMENT THE VALUE!, WE DECREMENT IT USING ""i--""

// for (i = aravind.length - 1; i >= 0; i -- ){
//     console.log(aravind[i])
// }




//// LOOP INSIDE OF A LOOP !!!!!!!!

// for (let i = 1; i < 4; i++ ){
//     console.log(`start excersise ${i}`);

//     for(let rep =1; rep < 6; rep++){
//         console.log(`lifting weight repitition ${rep}`);
//     }
// }




//// WHILE LOOP 


// let rep = 1;

// while ( rep <= 10 ){
//     console.log(`Lifting weight repetitions ${rep}`);
//     rep++;
// }


//// DO NOT WORRY ABOUT THE MATH, LOOK AT THE WHILE LOOP
//// CREATE A VARIABLE AND LOADING IT WITH A RANDOM NUMBER USING MATH 
// let dice = Math.trunc(Math.random()*6) +1;

// while (dice !== 6) {
//     console.log(`you have rolled ${dice}`);
//     dice = Math.trunc(Math.random()*6) +1;
// }





//// CODING CHALLENGE !!!!!!!!!!

//// Your tasks:

//// Create an array called bills containing all 10 test bill values.

//// Create empty arrays for the tips and the totals (tips and totals)

//// Use the calcTip function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!


// const calcTip = function (bill) {
//         return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
    
// const totals = [];
    

// for (i = 0; i < 10; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip+bills[i]);
// }

// console.log(bills, tips, totals);




//// CHALANGE ACCEPTED !!!!!!!


////Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array.

//// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

//// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

//// Call the function with the totals array.


// const calcAverage = function(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         //sum = sum + arr[i];
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(calcAverage([2,4,6,8]))
