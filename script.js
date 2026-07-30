const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function(){

    nav.classList.toggle("active");

});// スクロール表示

const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", function(){

    fades.forEach(function(fade){

        const position = fade.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(position < windowHeight - 100){

            fade.classList.add("active");

        }

    });

});