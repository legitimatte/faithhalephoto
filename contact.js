// //get data
// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const email = document.querySelector("#email");
// const phoneNumber = document.querySelector("#phoneNumber");
// const message = document.querySelector("#message");
// const success = document.querySelector("#success");
// const errorNodes = document.querySelectorAll(".error");

// //validate data
// function validateForm(){

//     clearMessages();

//     if(nameInput.value.length < 1){
//         errorNodes[0].innerText = "Name cannot be blank";
//         firstName.classList.add("error");
//     }

//     if(!emailIsValid(email.value)){
//         errorNodes[1].innerText = "Invalid email address";
//         email.classList.add("error");
//     }
// }


// //clear error / success messages
// function clearMessages(){
//     for(let i = 0; i < errorNodes.length; i++){
//         errorNodes[1].innerText = "";
//     }
//     firstName.classList.remove("error");
// }

// //check if email is valid
// function emailIsValid(email){
//     let pattern = /\S+@\S+\.\S+/;
//     return pattern.test(email);
// }




// SMTPJS
// var btn = document.getElementById('submit');
// btn.addEventListener('click', function(e) {
//     e.preventDefault()
//     console.log('hi');
// })


// CHATGPT SMTPJS
function sendEmail() {

var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var email = document.getElementById("email").value;
var phoneNumber = document.getElementById("phoneNumber").value;
var message = document.getElementById("message").value;

var subject = "Contact Form Submission";
var body = "First Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email + "\nPhone Number: " + phoneNumber + "\n\nMessage:\n" + message;

Email.send({
    SecureToken: "ea53ad51-de31-46b7-bf97-84632e618b9d",
    To: "mattbmakingwebsites@gmail.com", // Replace with your recipient email address
    From: "mattbmakingwebsites@gmail.com",
    Subject: "Form Message",
    Body: body
}).then(
    alert("Email sent successfully")
);
}