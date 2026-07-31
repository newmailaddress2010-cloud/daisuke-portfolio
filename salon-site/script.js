const menuButton = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");


menuButton.addEventListener("click", function(){

    nav.classList.toggle("active");

});