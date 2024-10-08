// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Use the pop() method to remove the last element from the array
const removed_element = numbers.pop();

// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(removed_element);

// Use the slice() method to exclude the first 3 elements and return a new array
console.log(numbers);
const new_arr = numbers.slice(0, 3);

// Set the value of the outputfield inner html to the new array
let elem = document.getElementById("OutputField");
elem.innerHTML = new_arr;
