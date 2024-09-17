function isValidEmail(email) {
    return (
        email.match(/^([a-zA-Z ]{1,})@([a-zA-Z]{1,}.([a-zA-Z]{3,}))$/) !== null
    );
}

// Test cases
console.log(isValidEmail("john@example.com")); // Should return true
console.log(isValidEmail("invalidemail@.com")); // Should return false
console.log(isValidEmail("no spaces@example.com")); // Should return true

let emails = ["john@example.com", "invalidemail@.com", "no spaces@example.com"];
for (let email of emails) {
    message = isValidEmail(email)
        ? `Welcome: ${email}!`
        : `Invalid email address: ${email}`;

    console.log(message);
}
