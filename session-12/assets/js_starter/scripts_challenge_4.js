// Challenge 4 Starter
// Initialise the array
console.log("Challenge 4 start");
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array

// If the number 5 is found in the array

// Console log each number in the array up to and including 5

// Output a message if the number 5 is not in the array

function challengeFour(arr) {
    let index = arr.findIndex((item) => item === 5);
    if (index === -1) {
        console.log("5 not found");
        return;
    }
    arr.forEach((number, arrIndex) => {
        if (arrIndex > index) {
            return;
        }
        console.log(number);
    });
}

challengeFour(numbers);
console.log("Challenge 4 run!");
