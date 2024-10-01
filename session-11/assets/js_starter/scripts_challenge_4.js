// Challenge 4 Starter
const eventLinks = document.querySelectorAll("[data-event]");
console.log(eventLinks);
function logEvent(eventDetails) {
    console.log(`${eventLinks[eventDetails].innerHTML.toLocaleUpperCase()}`);
    // Your code goes here
}

// Your code goes here
for (const [eventDetails] of eventLinks.entries()) {
    console.log(eventDetails);
    logEvent(eventDetails);
}
