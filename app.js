
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        document.body.style.overflow = "hidden";
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        document.body.style.overflow = "auto";
    }

});

document.querySelectorAll(".links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

        document.body.style.overflow = "auto";

    });

});

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

        document.body.style.overflow = "auto";

    }

});

const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(7,10,18,.9)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "none";

    }

});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});