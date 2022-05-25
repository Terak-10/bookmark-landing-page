const simple = document.querySelector(".simple");
const speedy = document.querySelector(".speedy");
const easy = document.querySelector(".easy");

const illustration1Img = document.querySelector(".illustration-1-img");
const illustration2Img = document.querySelector(".illustration-2-img");
const illustration3Img = document.querySelector(".illustration-3-img");

const illustration1 = document.querySelector(".illustration-1");
const illustration2 = document.querySelector(".illustration-2");
const illustration3 = document.querySelector(".illustration-3");

 
simple.addEventListener("click", function(){ 
    illustration1Img.classList.remove("hidden");
    illustration2Img.classList.add("hidden");
    illustration3Img.classList.add("hidden");

    illustration1.classList.remove("hidden");
    illustration2.classList.add("hidden");
    illustration3.classList.add("hidden");

    simple.style.borderBottom = "3px solid rgb(249, 7, 7)";
    speedy.style.borderBottom = "none";
    easy.style.borderBottom = "none";
});

speedy.addEventListener("click", function(){ 
    illustration1Img.classList.add("hidden");
    illustration2Img.classList.remove("hidden");
    illustration3Img.classList.add("hidden");

    illustration1.classList.add("hidden");
    illustration2.classList.remove("hidden");
    illustration3.classList.add("hidden");

    simple.style.borderBottom = "none";
    speedy.style.borderBottom = "3px solid rgb(249, 7, 7)";
    easy.style.borderBottom = "none";
});

easy.addEventListener("click", function(){ 
    illustration1Img.classList.add("hidden");
    illustration2Img.classList.add("hidden");
    illustration3Img.classList.remove("hidden");

    illustration1.classList.add("hidden");
    illustration2.classList.add("hidden");
    illustration3.classList.remove("hidden");

    simple.style.borderBottom = "none";
    speedy.style.borderBottom = "none";
    easy.style.borderBottom = "3px solid rgb(249, 7, 7)";
});