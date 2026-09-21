
console.log("Javascript is working");

// Initialize EmailJS
emailjs.init({
    publicKey: "GJg7a85kYmteXs69X"
});

// Get the contact form
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formMessage = document.getElementById("form-message");

    emailjs.sendForm(
        "service_gyw6dgd",
        "template_kg5or48",
        form
    )
    .then(function () {
        formMessage.textContent = "Message sent successfully!";
        form.reset();
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);

        formMessage.textContent =
            "Failed to send message. Please try again.";
    });
});