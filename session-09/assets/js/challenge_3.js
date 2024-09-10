// Generate 10 random numbers between 1 and 100
// Hint: be carful not to start at 0
let numbers = [];

for (let index = 0; index < 10; index++) {
    numbers.push(Math.random() * 100);
}

// Calculate the sum of the numbers
let sum = numbers.reduce((tally, current) => tally + current, 0);
// Calculate the average of the numbers
let average = sum / numbers.length;

// Calculate the square root of the average
// Hint: use the inbuild Math object method()
let squareRoot = Math.sqrt(average);

// Calculate the largest number
let max = Math.max(...numbers);

// Calculate the factorial of the largest number
// Hint: the factorial for 5 is 5*4*3*2*1
let factorial = 1;
for (let index = 1; index <= max; index++) {
    factorial *= index;
}

// Display the results using template literals
// Hint: log them in the console.
let message = `Numbers: ${numbers}\n\nSum: ${sum}\nAverage: ${average}\nSqrt: ${squareRoot}\nMax: ${max}\nFactorial: ${factorial}`;
console.log(message);