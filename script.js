const navBtn = document.querySelector(".nav-btn");
const navScreen = document.querySelector(".nav-screen");
const homeScreen = document.querySelector(".hero");
const portfolioScreen = document.querySelector(".portfolio");
const testimonialScreen = document.querySelector(".testimonial");
const processScreen = document.querySelector(".process");
const contactScreen = document.querySelector(".footer");

const homeBtn = document.querySelector(".home-btn");
const homeBtn2 = document.querySelector(".logo")
const portfolioBtn = document.querySelector(".works-btn");
const portfolioBtn2 = document.querySelector(".hero-cta");
const testimonialBtn = document.querySelector(".testimonial-btn");
const contactBtn = document.querySelector(".contact-btn");
const contactBtn2 = document.querySelector(".hero-cta2");
const processBtn = document.querySelector(".process-btn");
const toIg = document.querySelector("#to-ig");
const toWa = document.querySelector("#to-wa");
const toEmail = document.querySelector("#to-email");


navBtn.addEventListener("click", function () {
    navScreen.classList.toggle("active");
    navBtn.classList.toggle("cross");
});


homeBtn.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
homeBtn2.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

portfolioBtn.addEventListener("click", function() {
    portfolioScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
portfolioBtn2.addEventListener("click", function() {
    portfolioScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

processBtn.addEventListener("click", function() {
    processScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


testimonialBtn.addEventListener("click", function() {
    testimonialScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


contactBtn.addEventListener("click", function() {
    contactScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
contactBtn2.addEventListener("click", function() {
    contactScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

toIg.addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/zain_altaf_packaging_designer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});

toWa.addEventListener("click", function() {
    window.location.href = "https://wa.me/92306411269";
});

toEmail.addEventListener("click", function() {
    window.location.href = "mailto:zainch3234@gmail.com";
});
