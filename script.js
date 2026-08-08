document.addEventListener("DOMContentLoaded", function () {

    // Home page: Change image
    const imageButton = document.getElementById("changeImageButton");
    const interestImage = document.getElementById("interestImage");

    if (imageButton && interestImage) {
        imageButton.addEventListener("click", function () {

            if (interestImage.src.includes("computer.jpg")) {
                interestImage.src = "images/coding.jpg";
                interestImage.alt = "Programming code";
            } else {
                interestImage.src = "images/computer.jpg";
                interestImage.alt = "Computer workstation";
            }

        });
    }


    // About page: Show or hide information
    const infoButton = document.getElementById("infoButton");
    const extraInfo = document.getElementById("extraInfo");

    if (infoButton && extraInfo) {
        infoButton.addEventListener("click", function () {

            if (extraInfo.style.display === "none") {
                extraInfo.style.display = "block";
                infoButton.textContent = "Hide Information";
            } else {
                extraInfo.style.display = "none";
                infoButton.textContent = "Learn More";
            }

        });
    }


    // About page: Show welcome message
    const welcomeButton = document.getElementById("welcomeButton");
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (welcomeButton && welcomeMessage) {
        welcomeButton.addEventListener("click", function () {
            welcomeMessage.textContent =
                "Welcome to my website! Thanks for visiting.";
        });
    }


    // Contact page: Show contact message
    const contactButton = document.getElementById("contactButton");
    const contactMessage = document.getElementById("contactMessage");

    if (contactButton && contactMessage) {
        contactButton.addEventListener("click", function () {
            contactMessage.textContent =
                "Thank you for visiting my website and learning about my goals.";
        });
    }

});