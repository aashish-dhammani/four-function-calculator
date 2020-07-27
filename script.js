// CONCEPTS

// 0) Logging
//console.log("hello world");

// 1.1) Writing to a webpage
//document.write("hello world")

// 1.2) Write to a webpage at a certain ID
var test = document.getElementById("test");
// test.innerHTML = "hello world";

// 2) Variables — an item of data with a name and a value 
// var name = "Cohort 2";
// test.innerHTML = "Hello " + name;

// 3) Functions w/ paramaters — a set of instructions
function sayHello(name){
  test.innerHTML +="Hello " + name + "<br/>";
}
// sayHello("Cohort 2");
// sayHello("Cohort 1");
// sayHello ("Cohort 0");

// Challenge: Create a for loop that calls the function above 5 times!
// for(var i=0; i<5; i++){
//   console.log(i)
//   sayHello("Cohort 2")
// }


// 4) Numbers & Operators
// 5) Event Listeners
document.addEventListener("click",clicked);

function clicked(event){
  console.log(event)
}
// ——————————————————————————————————————————————————————
// CALCULATOR DEMO

// 1) get elements by IDs
var numberOne =document.getElementById("number1")
var numberTwo =document.getElementById("number2")
var addition =document.getElementById("addition")
var subtraction =document.getElementById("subtraction")
var multiplication =document.getElementById("multiplication")
var division =document.getElementById("division")
var answer =document.getElementById("answer")

// 2) add event listeners to IDs
addition.addEventListener("click",function(){
performOperation("addition");
});
subtraction.addEventListener("click",function(){
performOperation("subtraction");
});
multiplication.addEventListener("click",function(){
performOperation("multiplication");
});
division.addEventListener("click",function(){
performOperation("division");
});
// 2) create operator functions
function performOperation(operator){
  if (operator =="addition"){
  var sum = parseInt(numberOne.value) + parseInt (numberTwo.value);
  answer.innerHTML = sum;
} else if (operator =="subtraction"){
  var difference = parseInt(numberOne.value) - parseInt (numberTwo.value);
  answer.innerHTML = difference;
}else if (operator =="multiplication"){
  var product = parseInt(numberOne.value) * parseInt (numberTwo.value);
  answer.innerHTML = product;
}else if (operator =="division"){
  var divide = parseInt(numberOne.value) / parseInt (numberTwo.value);
  answer.innerHTML = divide;
}
}


// function addNumbers(){
//  var sum = parseInt(numberOne.value)+ parseInt(numberTwo.value);
//  answer.innerHTML = sum;
// }

// function subtracyNumbers(){
//  var sum = parseInt(numberOne.value) - parseInt(numberTwo.value);
//  answer.innerHTML = difference;
// }









