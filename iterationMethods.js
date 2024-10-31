//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
let res1 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 25) res1.push(numbers[i]);
}
console.log(`${res1}`);

let res2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) res2.push(numbers[i]);
}
console.log(`${res2}`);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/
let pow2 = (n) => n ** 2;
let res3 = [];
res3 = numbers.map(pow2);
console.log(`${res3}`);

let x2 = (n) => n * 2;
let res4 = [];
res4 = numbers.map(x2);
console.log(`${res4}`);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
let res5 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 20) res5.push(numbers[i]);
}
res5 = numbers.map(pow2);
console.log(`${res5}`);

let res6 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) res6.push(numbers[i]);
}
res6 = numbers.map(x2);
console.log(`${res6}`);
// note: could have made the filter and the maps as seprate functions;
/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
function Logger (array){ 
    for(let i=0;i<array.length;i++){
       console.log(`${array[i]}`)
    }
}

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
function mapF2C(array){
    let res= new Array(array.length);
    for(let i=0;i<array.length;i++){
     res[i]= (array[i]-32)*(5/9);
    }
    return res;
}

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
function hottestDays(temp,threshhold){
    let res=[];
    for (let i=0;i<temp.length;i++){
        if (temp[i]> threshhold) res.push(temp[i]);
    }
    return res;
}

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
function logHottestDays (temp,threshhold){
    Logger(mapF2C(hottestDays(temp,threshhold)));
}
const test=[79,82,83,84,84,86,88]
logHottestDays(test,83);
