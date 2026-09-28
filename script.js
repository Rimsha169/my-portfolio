const button = document.querySelector(".contact-button");

button.onclick = function () {
    alert("Thanks for contacting me!");
};

const copyright = document.querySelector("#copyright");

copyright.textContent = "© " + new Date().getFullYear() + " Reem Malik. All rights reserved.";

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.onclick = function (event) {
        event.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    };
});

navLinks.forEach(function (link) {
    link.onclick = function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    };
});