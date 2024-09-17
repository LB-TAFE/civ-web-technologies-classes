function isValidEmail(email) {
    return (
        email.match(/^([a-zA-Z]{1,})@([a-zA-Z]{1,}.([a-zA-Z]{3,}))$/) !== null
    );
}

let emails = ["john@example.com", "invalidemail@.com", "no spaces@example.com"];
for (let email of emails) {
    message = isValidEmail(email)
        ? `Welcome: ${email}!`
        : `Invalid email address: ${email}`;

    console.log(message);
}
