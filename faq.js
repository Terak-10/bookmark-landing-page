// pri 4 vymazať v boxe border bottom pri aktivácii 

const question1 = document.querySelector(".question-1");
const question2 = document.querySelector(".question-2");
const question3 = document.querySelector(".question-3");
const question4 = document.querySelector(".question-4");

const answer1 = document.querySelector(".faq-answer-1");
const answer2 = document.querySelector(".faq-answer-2");
const answer3 = document.querySelector(".faq-answer-3");
const answer4 = document.querySelector(".faq-answer-4");

const questionBox4 =  document.querySelector(".question-box-4");


question1.addEventListener("click", function() {
    answer1.classList.toggle("hidden");
});

question2.addEventListener("click", function() {
    answer2.classList.toggle("hidden");
});

question3.addEventListener("click", function() {
    answer3.classList.toggle("hidden");
});

question4.addEventListener("click", function() {
    answer4.classList.toggle("hidden");
    questionBox4.classList.toggle("hidden");
});

