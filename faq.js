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

// Arrows
const arrow1 = document.querySelector(".faq-question_arrow-1-blue");
const arrow2 = document.querySelector(".faq-question_arrow-2-blue");
const arrow3 = document.querySelector(".faq-question_arrow-3-blue");
const arrow4 = document.querySelector(".faq-question_arrow-4-blue");

const arrow1Orange = document.querySelector(".faq-question_arrow-1");
const arrow2Orange = document.querySelector(".faq-question_arrow-2");
const arrow3Orange = document.querySelector(".faq-question_arrow-3");
const arrow4Orange = document.querySelector(".faq-question_arrow-4");



question1.addEventListener("click", function() {
    answer1.classList.toggle("hidden");
    arrow1.classList.toggle("hidden");
    arrow1Orange.classList.toggle("hidden");
});

question2.addEventListener("click", function() {
    answer2.classList.toggle("hidden");
    arrow2.classList.toggle("hidden");
    arrow2Orange.classList.toggle("hidden");
});

question3.addEventListener("click", function() {
    answer3.classList.toggle("hidden");
    arrow3.classList.toggle("hidden");
    arrow3Orange.classList.toggle("hidden");
});

question4.addEventListener("click", function() {
    answer4.classList.toggle("hidden");
    questionBox4.classList.toggle("hidden");
    arrow4.classList.toggle("hidden");
    arrow4Orange.classList.toggle("hidden");
});
