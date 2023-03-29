const quizData = [
    {
        categories: "Balanced",
        question: "To what extent do you meet deadlines without rushing through assignments at the last minute?",
        a: "I submit my work before the due date, staying on track of everything.",
        b: "I submit my work on time.",
        c: "I sometimes find it difficult to meet deadlines.",
        d: "Meeting deadlines is one of the biggest challenges for me.",
        e: "I lost my confidence in meeting deadlines, and I often email teachers about giving extensions.",
        correctA: "a",
        correctB: "b",
        correctC: "c",
        correctD: "d",
        correctE: "e",
    },
    {
        categories: "Balanced",
        question: "How often do you take breaks or do something that makes you feel happy (ex. Sleep, socializing, sports, etc..)?",
        a: "I feel productive and emotionally enriched, as I spend quality time with friends, family, and for myself.",
        b: "I mostly care for my well being.",
        c: "I spend some time on my well being.",
        d: "I rarely spend time for my psychological well being. I am overwhelmed and tired.",
        e: "I never give myself enough time to rest.",
        correctA: "a",
        correctB: "b",
        correctC: "c",
        correctD: "d",
        correctE: "e",
    },
    {
        categories: "Balanced",
        question: "To what extent do you think you are productive, and study effectively?",
        a: "I skim through texts, reduce information I need to study, and actively recall what we’ve learned in class.",
        b: "I regularly review contents learned in class and study effectively.",
        c: "I sometimes study productively, other times I don't.",
        d: "I read everything on the textbook and internet as I study.",
        e: "I am distracted a lot and procrastinate, so I don’t get my work done.",
        correctA: "a",
        correctB: "b",
        correctC: "c",
        correctD: "d",
        correctE: "e",
    },
    {
        categories: "Caring",
        question: "To what extent do you consider yourself service oriented?",
        a: "Always, vote for me as a service council",
        b: "Often, I love helping people",
        c: "Occasionally, but can’t say that I am service “oriented”",
        d: "Hardly, though I feel like I have to",
        e: "Never, I am a self-centered person",
        correctA: "a",
        correctB: "b",
        correctC: "c",
        correctD: "d",
        correctE: "e",

    },
    {
        categories: "Caring",
        question: "To what extent do you consider yourself as being good at empathizing with others?",
        a: "Always",
        b: "Often, I was born for this",
        c: "Occasionally, just not to lose friends",
        d: "Hardly, empathizing with others is hard for me",
        e: "Never, empathy is useless",
        correctA: "a",
        correctB: "b",
        correctC: "c",
        correctD: "d",
        correctE: "e",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const questionNo = document.getElementById('quetionno')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
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
    e_text.innerText = currentQuizData.e
    
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
       if(answer === quizData[currentQuiz].correctA) {
           score+=5;
       }
       
       if(answer === quizData[currentQuiz].correctB) {
            score+=4;
        }
        
        if(answer === quizData[currentQuiz].correctC) {
            score+=3;
        }

        if(answer === quizData[currentQuiz].correctD) {
            score+=2;
        }

        if(answer === quizData[currentQuiz].correctE) {
            score++
        }
        currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You got ${score} out of ${135} points! </h2>
           <button onclick="location.href='end.html'">See what this means</button> 
           `
           //connect this to end.html
       }
    }
})
