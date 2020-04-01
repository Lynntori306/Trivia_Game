document.getElementById("startBtn").addEventListener("click", startQuiz);
var btnContainer = document.getElementById("btnOptions");
var quesitonCounter = 0
//increment the question country by 1

function startQuiz() {
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.style.display = "block";
    setNextQuestion(quesitonCounter);
    
    var timeleft = 3;
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    var Timer = setInterval(function () {
        
        if (timeleft <= 0) {
            clearInterval(Timer);
            document.getElementById("countdown").innerHTML = "Times-up!";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}


function setNextQuestion(questionNum) {
// loop through current question options 
//for each option create a btn that apends to the DOM
for (var i = 0; i < questions[questionNum].options.length; i++){

    // create an html btn
    var btn = document.createElement("BUTTON");
    // add text to the btn
    btn.innerHTML = questions[questionNum].options[i];
    //add style to EL
    btn.classList.add("btn-options");
    //add btn to the DOM
    btnContainer.appendChild(btn);

}    
quesitonCounter++;

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
        answer: "206"
    }
];
