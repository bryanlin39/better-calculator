// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert(add(number1, number2));
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert(multiply(number1, number2));
//
// var sub = function(number1, number2) {
//   return number1 - number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert(sub(number1, number2));
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert(divide(number1, number2));
//
var height = parseInt(prompt("Enter your height in inches"));
var weight = parseInt(prompt("Enter your weight in pounds"));
weight=weight*.45
height = Math.pow((height*.025), 2);
var bmi = weight/height
alert(bmi)
