// Event handler function for click event
let presses = 0;

function handleClick() {
    presses++;
    console.log(presses);
}
// Assigning event handler to a button element

document.getElementById("button").addEventListener("click", handleClick);