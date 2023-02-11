const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const home = document.querySelector(".home1")
const aboutme = document.querySelector(".about1")
const experience = document.querySelector(".experiences")
const skills = document.querySelector(".skills")
const portfolio = document.querySelector(".portfolio")
const contact = document.querySelector(".contact1")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu__visible")
})
home.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
aboutme.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
experience.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
skills.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
portfolio.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})
contact.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu__visible")
})