// Get the result input element
const result = document.getElementById("result");

// Get all the number buttons
const numbers = document.querySelectorAll(".num");

// Get all the operator buttons
const operators = document.querySelectorAll(".operator");

// Get the equal button
const equal = document.getElementById("equal");

// Get the clear button
const clear = document.getElementById("clear");

// Get the delete button
const del = document.getElementById("delete");

// Get the point button
const pointButton = document.getElementById("point");

// Get the square root button
const sqrtButton = document.querySelector('.operator[value="√"]');

// Get the pi button
const piButton = document.querySelector('.num[value="π"]');

// Get the open parenthesis button
const openParenthesisButton = document.querySelector('.operator[value="("]');

// Get the close parenthesis button
const closeParenthesisButton = document.querySelector('.operator[value=")"]');

// Get the exponent button
const exponentButton = document.querySelector('.operator[value="^"]');

// Attach event listeners to number buttons
numbers.forEach((num) => {
  num.addEventListener("click", function () {
    result.value += this.value;
  });
});

// Attach event listeners to operator buttons
operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    result.value += this.value;
  });
});

// Attach event listener to equal button
equal.addEventListener("click", function () {
  result.value = eval(result.value);
});

// Attach event listener to clear button
clear.addEventListener("click", function () {
  result.value = "";
});

// Attach event listener to delete button
del.addEventListener("click", function () {
  result.value = result.value.slice(0, -1);
});

// Attach event listener to percentage button
const percentage = document.querySelector('.operator[value="%"]');
percentage.addEventListener("click", function () {
const expression = result.value;
const value = parseFloat(expression) / 100;
result.value = value.toFixed(2);
});


// Attach event listener to point button
pointButton.addEventListener("click", function () {
// Handle the logic for the point button click
  result.value += this.value;
});

// Attach event listener to square root button
sqrtButton.addEventListener("click", function () {
// Handle the logic for the square root button click
const currentValue = parseFloat(result.value);
if (!isNaN(currentValue)) {
  result.value = Math.sqrt(currentValue);
 }
});

 // Attach event listener to pi button
 piButton.addEventListener("click", function () {
 // Handle the logic for the pi button click
  result.value += Math.PI;
});

 // Attach event listener to open parenthesis button
 openParenthesisButton.addEventListener("click", function () {
 // Handle the logic for the open parenthesis button click
  result.value = this.value;
});

 // Attach event listener to close parenthesis button
closeParenthesisButton.addEventListener("click", function () {
// Handle the logic for the close parenthesis button click
result.value += this.value;
});

 // Attach event listener to exponent button
exponentButton.addEventListener("click", function () {
 // Handle the logic for the exponent button click
  result.value += this.value;
});