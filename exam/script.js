alert("AI Camera On!");
const video = document.getElementById("video");

async function beginVideo(){
    let stream = null;
    try{
            stream = await navigator.mediaDevices.getUserMedia({audio:false,video:true})
            video.srcObject = stream;
        }
    catch(err){
        alert("Unable to connect to device")
        console.log(err)
    }
}

beginVideo();
const quizData = [
    {
        question: "Turn On Your WebCam, Allow The Popup Messege with Left Side",
        a: "Ok",
        b: "",
        c: " ",
        d: " ",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },{
        question: "The Second Generation Computer used ",
        a: "Transistors",
        b: "Integrated circuit",
        c: "Vacuum tube",
        d: "Chip",
        correct: "a",
    },{
        question: "Which among the following correctly defines the term cookie?",
        a: "It is a message given to a web browser by a web server",
        b: "It is a password stored by web server",
        c: "It is virus that corrupts other web file",
        d: "It is intentionally created deceptive message that collects user’s personal information",
        correct: "a",
    },{
        question: "Which one of the following language is developed by Microsoft?",
        a: "Java",
        b: "C Sharp",
        c: "DCL",
        d: "SHELL",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Results will be publish soon</h2>
           

           <button onclick="closeFullscreen(),window.close();">Submit</button>
           `
       }
    }
})



    var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("You are out of time!");
    }
}