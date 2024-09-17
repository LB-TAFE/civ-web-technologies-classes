function isValidEmail(email) {
  // Initialise a variable to store feedback
  let feedback = "";
  console.log();

  // Check for basic email format
  // hint: email.match()
  email.match(/^([a-zA-Z]{1,})@([a-zA-Z]{1,}.([a-zA-Z]{1,}))$/) !== null;

  // Check for spaces in the email
  // hint: use includes()
  email.includes(" ");

  // Check for the "@" symbol
  // hint: use includes()
  email.includes("@");

  // Check for multiple "@" symbols
  // hint: use split()
  // hint: count the number of parts using .length
  hasMultipleAtSymbols = email.split("@").length > 2 ? true : false;

  // Check for "@." sequence
  // hint: use includes()
  email.includes("@.");

  // Check for "@" at the start or end
  // hint: use startsWith(), endsWith() & the or comparison opertor ||
  startsOrEndsWithAtSymbol =
      email.startsWith("@") || email.endsWith("@") ? true : false;

  // Determine the final validation result & return the feedback messgae
  if (feedback === "") {
    // return a valid message
  } else {
    // return aan invalid message use=ing template literals
  }
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalid email@.com"));
console.log(isValidEmail("no spaces@example.com"));
console.log(isValidEmail("bademail@.com"));
console.log(isValidEmail("@invalid.com"));
console.log(isValidEmail("extra@@invalid.com"));
