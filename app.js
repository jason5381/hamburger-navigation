let hamburger=document.querySelector(".Hamburger");
let navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

let navlink=document.querySelector(".nav-link");
navlink.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});