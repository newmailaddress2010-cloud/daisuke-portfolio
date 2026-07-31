const fadeElements = document.querySelectorAll(".fade");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});


fadeElements.forEach((element)=>{

    observer.observe(element);

});
