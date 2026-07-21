// ==========================
// Kamroop Tour N Travels
// Premium Website Script
// ==========================

// Sticky Header Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";
        header.style.background = "#002855";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "#003366";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome Message
window.onload = function () {
    console.log("Welcome to Kamroop Tour N Travels");
};

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Service Box Animation
const services = document.querySelectorAll(".service-box div");

services.forEach(service => {
    service.addEventListener("mouseenter", () => {
        service.style.transform = "scale(1.05)";
    });

    service.addEventListener("mouseleave", () => {
        service.style.transform = "scale(1)";
    });
});

// Hero Fade Effect
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (hero) {
        hero.style.opacity = 1 - value / 800;
    }
});

// Floating WhatsApp Animation
const whatsapp = document.querySelector(".floating-whatsapp");

setInterval(() => {
    if (whatsapp) {
        whatsapp.style.transform = "scale(1.12)";
        setTimeout(() => {
            whatsapp.style.transform = "scale(1)";
        }, 400);
    }
}, 2500);

// Current Year in Footer (optional)
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Kamroop Tour N Travels | All Rights Reserved.";
}