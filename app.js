
const header = document.querySelector("header") ;

window.addEventListener("scroll", () => {
    header.classList.toogle("sticky", window.scrollY > 120)
})

let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
};