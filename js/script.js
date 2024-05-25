'use strict';

// Function to add event listener to element(s)
function addEventOnElem(elem, type, callback) {
    if (elem && elem.length > 0) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else if (elem) {
        elem.addEventListener(type, callback);
    }
}

// Navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

function toggleNavbar() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);


// navbar close when click of any Texts

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navLinks , "click" , closeNavbar);

// header active when scroll down

const header = document.querySelector("[data-header]");
const headerActive = function(){
     if(window.scrollY > 100 ?
        header.classList.add("active") :
    
        header.classList.remove("active"));
     
}

addEventOnElem(window , "scroll" , headerActive);


const accordingAction = document.querySelectorAll("[data-according-action]");
const toggleAccording = function (){
    this.classList.toggle("active");
}

addEventOnElem(accordingAction , "click" ,toggleAccording);