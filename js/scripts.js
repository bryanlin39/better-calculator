var add = function(number1, number2) {
  return number1 + number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// var height = parseInt(prompt("Enter your height in inches"));
// var weight = parseInt(prompt("Enter your weight in pounds"));
// weight=weight*.45;
// height = Math.pow((height*.025), 2);
// var bmi = weight/height;
// alert(bmi);
//
// var Celcius= parseInt(prompt("Enter a temperature in Celcius"));
// Farenheit= Celcius*9/5 + 32;
// alert(Farenheit)
//
// var Farenheit= parseInt(prompt("Enter a temperature in Farenheit"));
// Celcius= (Farenheit - 32) * 5/9
// alert(Celcius)

$(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = sub(number1, number2);
    $("#output").text(result);
  });

  $("form#multiply").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});
