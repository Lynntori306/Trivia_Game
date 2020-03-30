function startQuiz() {
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.style.display = "block";


    var timeleft = 5;
    var Timer = setInterval(function () {

        startQuiz();

        if (timeleft <= 0) {
            clearInterval(Timer);
            document.getElementById("countdown").innerHTML = "Times-up!";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}
document.getElementById("startBtn").addEventListener("click", startQuiz())




function setNextQuestion() {



    let questionElement = document.getElementById("question");
    let answerButtonsElement = document.getElementById("answerBtn");



}

function selectAnswer() {


}


var questionContainer = document.getElementById("questions");
var questions = [
    {
        question: "On average how many eggs does a chicken lay in a year?",
        options: ["160", "85", "276", "325"],
        answer: "276"
    },

    {
        question: "Which president served the longest term?",
        options: ["Abraham Lincoln", "Thomas Jefferson", "Andrew Jackson", "Franklin D. Roosevelt"],
        answer: "Franklin D. Roosevelt"
    },

    {
        question: "How many cards are in a deck?",
        options: ["42", "52", "24", "56"],
        answer: "52"
    },

    {
        question: "What year did Armstrong first set foot on the moon?",
        options: ["1966", "1970", "1962", "1969"],
        answer: "1969"
    },

    {
        question: "How many episodes are in the hit TV show, Friends?",
        options: ["236", "95", "308", "353"],
        answer: "236"
    },


    {
        question: "What is the scientific word for cat?",
        options: ["Canis", "felis catus", "acinonyx jubatus", "feline"],
        answer: "Felis catus"
    },

    {
        question: "How many bones are in the human body",
        options: ["206", "270", "242", "188"],
        answer: "270"
    }
];








