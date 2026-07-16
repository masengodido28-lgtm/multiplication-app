// Get the HTML elements
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const multiplyBtn = document.getElementById("multiplyBtn");
const result = document.getElementById("result");

// Listen for the button click
multiplyBtn.addEventListener("click", function () {

    // Get the values from the inputs
    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);

    // Multiply the numbers
    const answer = firstNumber * secondNumber;

    // Display the answer
    result.textContent = `Answer: ${answer}`;

});