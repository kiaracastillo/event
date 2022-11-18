/*
Kiara Castillo Magallanes
11/17/2022
Event

Flash Cards
An application with 3 buttons that ask questions. For instance, they might ask
"What is the capital of Indiana?". Each button should have a data-answer 
attribute that lists the answer.

*/

let quest1 = document.getElementById("question1");
quest1.addEventListener("click", answer1);

let quest2 = document.getElementById("question2");
quest2.addEventListener("click", answer2);

let quest3 = document.getElementById("question3");
quest3.addEventListener("click", answer3);

function answer1() {
    event.target.innerHTML = "Indianopolis";
}

function answer2() {
    event.target.innerHTML = " William Shakespeare";
}

function answer3() {
    event.target.innerHTML = "Red, Yellow, Blue";
}
