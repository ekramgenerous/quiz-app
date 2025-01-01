const questions = [
   {
    question:"Which is the largest animal in the world?",
    answers:[
        {text:"Shark",correct: false},
        {text: "Blue whale",correct: true},
        {text:"Elephant",correct: false},
        {text:"Giraff",correct :false}
    ]

   },
   {
    question:"Which is the the smallest country in the world?",
    answers:[
        {text:"Vatican city",correct: true},
        {text: "Bhutan",correct: false},
        {text:"Nepal",correct: false},
        {text:"Shri lanka",correct :false}
    ]

   },
   {
    question:"Which is the largest desert in the world?",
    answers:[
        {text:"kalahari",correct: false},
        {text: "Gobi",correct: true},
        {text:"shara",correct: false},
        {text:"Antractica",correct :true}
    ]

   },
   {
    question:"Which is the the smallest continent in the world?",
    answers:[
        {text:"Asia",correct: false},
        {text: "Australia",correct: true},
        {text:"Arctic",correct: false},
        {text:"Africa",correct :false}
    ]

   }
];
const questionElemnet = document.getElementById("question");
const answerButtons = document.getElementById("btn-answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerhtml = "Next";
    showQuestion();
}
function showQuestion (){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.indexHTML =  questionNo + " ." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild("button");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click,selectAnswer");
    });
     
}
 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
 }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disable =true;
    });
    nextButton.style.display = "block";
  }
  function showScore(){
    resetState();
    questionElemnet.innerHTML = `You scores ${score} out of ${
    questions.length}`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }
  nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex <  questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  });
startQuiz();