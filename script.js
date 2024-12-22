// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Highlight the current section in the navigation
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });

    // Gallery functionality (for Memories section)
    const gallery = document.getElementById("gallery");

    const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

    images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Memory Image";
        img.classList.add("gallery-image");
        gallery.appendChild(img);
    });

    // Form validation before submission
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("All fields are required!");
            event.preventDefault();
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
});
