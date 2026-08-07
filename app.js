/* ==========================================
   MORHUM SAJJAD HOSSAIN SMRITI FOOTBALL ACADEMY
   app.js
   Developed by Imran Hussain Mahi
========================================== */

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

});


/* ==========================================
   STICKY HEADER
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================================
   HERO IMAGE SLIDER
========================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    if (!slides.length) return;

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    dots.forEach((dot) => {

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    if (dots[index]) {

        dots[index].classList.add("active");

    }

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if (slides.length > 0) {

    setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

        });

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".stat-card h3");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=parseInt(counter.innerText);

            let count=0;

            const speed=Math.max(20, Math.floor(target/40));

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.innerText=count+"+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=target+"+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals=document.querySelectorAll(

".feature-card,.mission-card,.value-card,.goal-card,.partner-card,.contact-card,.faq-item,.timeline-item"

);

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.15});

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".8s ease";

    revealObserver.observe(item);

});

/* ==========================================
   LANGUAGE SWITCH
========================================== */

const bnBtn = document.getElementById("bnBtn");
const enBtn = document.getElementById("enBtn");

if (bnBtn && enBtn) {

    bnBtn.addEventListener("click", () => {
        localStorage.setItem("language", "bn");
        location.reload();
    });

    enBtn.addEventListener("click", () => {
        localStorage.setItem("language", "en");
        location.reload();
    });

}

const currentLanguage = localStorage.getItem("language") || "bn";

/* ==========================================
   MOBILE MENU AUTO CLOSE
========================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


/* ==========================================
   HEADER SHADOW
========================================== */

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ==========================================
   PRELOAD IMAGES
========================================== */

[
"https://raw.githubusercontent.com/imranmahi529/MSHS-FOOTBALL-ACADEMY/refs/heads/main/IMG_3071.JPG",
"https://raw.githubusercontent.com/imranmahi529/MSHS-FOOTBALL-ACADEMY/refs/heads/main/IMG_3074.JPG",
"https://raw.githubusercontent.com/imranmahi529/MSHS-FOOTBALL-ACADEMY/refs/heads/main/IMG_3092.JPG",
"https://raw.githubusercontent.com/imranmahi529/MSHS-FOOTBALL-ACADEMY/refs/heads/main/IMG_3654.JPG"
].forEach(src => {

    const img = new Image();
    img.src = src;

});


console.log("MSHS Football Academy Website Loaded Successfully");

