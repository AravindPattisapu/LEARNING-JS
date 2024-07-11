// SWITCH VS IF ELSE

// const day = `friday`;

// SWITCH 

// switch(day){
//       case `monday`: //day === `monday`
//             console.log(`Plan course structure`);
//             console.log(`Go to coding meet up`);
//             break;
//       case `tuesday`:
//             console.log(`Prepare theory videos`);
//             break;
//       case `wednesday`:
//       case `thursday`:
//             console.log(`Write code examples`);
//             break;
//       case `friday`:
//             console.log(`Record videos`);
//             break;
//       case `saturday`:
//       case `sunday`:
//             console.log(`Enjoy the weekend :D`);
//             break;
//       default:
//             console.log(`Not a valid option/day!`)
// }

//IF ELSE

// if (day === `monday`) {
//       console.log(`Plan course structure`);
//       console.log(`Go to coding meet up`);
// }else if (day === `tuesday`){
//       console.log(`Prepare theory videos`);
// }else if (day === `wednesday`||day === `thursday`){
//       console.log(`Write code examples`);
// }else if (day === `friday`){
//       console.log(`Record videos`);
// }else if (day === `saturday`||day === `sunday`){
//       console.log(`Enjoy the weekend :D`);
// }else {
//       console.log(`Not a valid option!`)
// }

//-------------------------------------//

// THE CONDITIONAL OPERATOR 

//const age = 17;
// age >= 18? console.log(`I like to drink wine!`):
// console.log(`I like to drink water!`);

// const drink = age >= 18 ? `Wine` : `Water`;
// console.log (drink)

// CAN BE USED INSIDE TEMPLATE LITERALS " ${} "

// console.log (`I like to drink ${age>=18 ? `Wine` : `Water`}`);

// --------------------------------------------------//

//EXCERSISE  
//Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// const bill = 275;
// const tip15 = bill * 0.15;
// const tip30 = bill * 0.30;

// bill >= 50 && bill <= 300 ? 
// console.log (`bill = ${bill}, tip = 15% (${ tip15}), total value = ${tip15 + bill}`) : 
// console.log (`bill = ${bill}, tip = 30% (${tip30}), total value = ${tip30 + bill}`);

// ANOTHER METHOD

// const bill = 40;
// const tip = bill<= 300 && bill >= 50 ? bill * 0.15 :
// bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

// ------------------------------------------ //