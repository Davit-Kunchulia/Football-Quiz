let container = document.querySelector(".container")
let div = document.querySelector(".firstDiv");
let Button = document.createElement("button");
Button.textContent = "Next";
container.appendChild(Button);

Button.addEventListener("click", () => {
    calculateResult();
});



let questions = [
    {
        question: 'Which country hosted the 2010 FIFA World Cup?',
        answers: ["In South Africa", " In Germany", "In Brazil", "In Japan"],
        correctAnswer: 0,
    },
    {
        question: 'Which club has won Uefa Champions League 3 times in a row?',
        answers: ["Bayern Munich", "Liverpool", "Real Madrid", "FC Barcelona"],
        correctAnswer: 1,
    },
    {
        question: 'Which football club is known as "The Red Devils"?',
        answers: ["Liverpool", "Manchester United", "Red Star Belgrade", "Atletico Madrid"],
        correctAnswer: 2,
    }
];

let userSelections = [];


function firstQuestion() {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")




    h2.textContent = questions[0].question;
    p.textContent = questions[0].answers[0];
    pSecond.textContent = questions[0].answers[1];
    pThird.textContent = questions[0].answers[2]
    pFourth.textContent = questions[0].answers[3]

    p.addEventListener("click", () => {
        handleUserSelection(0, 0);

        p.classList.toggle("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pSecond.addEventListener("click", () => {
        handleUserSelection(0, 1);

        p.classList.remove("submit")
        pSecond.classList.toggle("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pThird.addEventListener("click", () => {
        handleUserSelection(0, 2);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.toggle("submit")
        pFourth.classList.remove("submit")
    })

    pFourth.addEventListener("click", () => {
        handleUserSelection(0, 3);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.toggle("submit")
    })


    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(pSecond);
    div.appendChild(pThird)
    div.appendChild(pFourth)
}
firstQuestion()



function secondQuestion() {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")




    h2.textContent = questions[1].question;
    p.textContent = questions[1].answers[0];
    pSecond.textContent = questions[1].answers[1];
    pThird.textContent = questions[1].answers[2]
    pFourth.textContent = questions[1].answers[3]

    p.addEventListener("click", () => {
        handleUserSelection(2, 0);

        p.classList.toggle("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pSecond.addEventListener("click", () => {
        handleUserSelection(2, 1);

        p.classList.remove("submit")
        pSecond.classList.toggle("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pThird.addEventListener("click", () => {
        handleUserSelection(2, 2);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.toggle("submit")
        pFourth.classList.remove("submit")
    })

    pFourth.addEventListener("click", () => {
        handleUserSelection(2, 3);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.toggle("submit")
    })


    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(pSecond);
    div.appendChild(pThird)
    div.appendChild(pFourth)
}
secondQuestion()



function thirdQuestion() {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")




    h2.textContent = questions[2].question;
    p.textContent = questions[2].answers[0];
    pSecond.textContent = questions[2].answers[1];
    pThird.textContent = questions[2].answers[2]
    pFourth.textContent = questions[2].answers[3]

    p.addEventListener("click", () => {
        handleUserSelection(1, 0);

        p.classList.toggle("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pSecond.addEventListener("click", () => {
        handleUserSelection(1, 1);

        p.classList.remove("submit")
        pSecond.classList.toggle("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pThird.addEventListener("click", () => {
        handleUserSelection(1, 2);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.toggle("submit")
        pFourth.classList.remove("submit")
    })

    pFourth.addEventListener("click", () => {
        handleUserSelection(1, 3);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.toggle("submit")
    })


    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(pSecond);
    div.appendChild(pThird)
    div.appendChild(pFourth)
}
thirdQuestion()



function handleUserSelection(questionIndex, selectedAnswerIndex) {
    userSelections[questionIndex] = selectedAnswerIndex;
}

function calculateResult() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userSelections[i] === questions[i].correctAnswer) {
            score++;
        }
    }

    
    alert(`Your score: ${score} out of ${questions.length}`);
}



