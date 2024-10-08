// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5

// If true, filter out numbers less than 5

// Then square each number in the resulting array

// Output the final array

// Output a message if the number 5 is not in the array

function job(arr) {
    if (!arr.includes(5)) {
        console.log("5 is not in the Array");
        return [];
    }

    let new_array = arr.filter((number) => number < 5);
    return new_array.map((item) => item ** 2);
}

console.log(job(numbers));
