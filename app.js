const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const lista = document.querySelector(".header .nav-bar .nav-list li");
const header = document.querySelector(".header.container");
const instagram = document.querySelector("#instagram");
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector("twitter");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobile_menu.classList.toggle("active")
    
})

mobile_menu.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobile_menu.classList.toggle("active")
})


document.addEventListener("scroll", ()=> {
    let scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
})
