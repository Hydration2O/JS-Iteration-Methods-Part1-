//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function greaterthan25 (n){
    return n>=25;
}
function divBy5 (n){
    return n %5===0;
}
let biggerThanOrEqual25 = numbers.filter(greaterthan25);
let divisible5 = numbers.filter(divBy5);
console.log(biggerThanOrEqual25);
console.log(divisible5);


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

function square (n){
    return n**2;
}
function by2 (n){
    return n*2;
}
let squaredNumbers= numbers.map(square);
let Doubled= numbers.map(by2);
console.log(squaredNumbers);
console.log(Doubled);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function greaterThan20(n){
    return n>=20;
}
let numbersV5 = numbers.filter(greaterThan20).map(square);
console.log(numbersV5);

function by3 (n){
    return n*3;
}
let numbersV6 = numbers.filter(divBy5).map(by3);
console.log(numbersV6);

