// Challenge 2 Solution
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code goes here
// for (const [index, value] of numbers.entries()) {
//     if (value % 2 == 0) {
//         console.log(`${value} is even`);
//         continue;
//     }
//     console.log(`${value} is odd`);
// }
for (const [index, value] of numbers.entries()) {
    let type = value % 2 == 0 ? "even" : "odd";
    console.log(`${value} is ${type}`);
}