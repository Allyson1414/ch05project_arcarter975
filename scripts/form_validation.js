/* Javascript for index.html */

checkMissing(
    displayMe(document.getElementById('missing-count').value)
);   /* Checks to see if required fields are empty */

function validate_form(inform){
    let warnArr = document.getElementById('missing-count');
    let ndx;
}   /* Checks to see how many empty fields there are. */

const button = document.getElementById("submit");
button.addEventListener("click", Submit);
/* Adding the event listener to the submit button */

function validateEmail (email) {
    return email.length >= 8;
} /* Checks to see if email is 8 characters long */

if (checkMissing(email) && validateEmail(email)) {
    console.log("Form is valid!");
}   /* Checks to see if the email field is filled out */

if (email == ""|| email.length < 8) {
    event.preventDefault();
    alert("Form is blocked due to incomplete or invalid fields. Please complete all required fields.");
}   /* Checks to see if email form is filled out */

if (l_name == ""|| l_name.length < 3) {
    event.preventDefault();
    alert("Form is blocked due to incomplete or invalid fields. Please complete all required fields.");
} /* Checks to see if last name field is filled out */

if (f_name == ""|| f_name.length < 3) {
    event.preventDefault();
    alert("Form is blocked due to incomplete or invalid fields. Please complete all required fields.");
}   /* Checks to see if first name field is filled out */


