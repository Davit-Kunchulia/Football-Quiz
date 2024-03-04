let container = document.querySelector(".container")
let div = document.querySelector(".firstDiv");
let Button = document.createElement("button");
Button.textContent = "Submit";
container.appendChild(Button);



let questions = [
    {
        question: 'Which country hosted the 2010 FIFA World Cup?',
        answers: ["In South Africa", " In Germany", "In Brazil", "In Japan"],
        index: 0,
    },
    {
        question: 'Which club has won the Uefa Champions League 3 times in a row?',
        answers: ["Bayern Munich", "Liverpool", "Real Madrid", "FC Barcelona"],
        index: 1,
    },
    {
        question: 'Which football club is known as "The Red Devils"?',
        answers: ["Liverpool", "Manchester United", "Red Star Belgrade", "Atletico Madrid"],
        index: 2,
    },
    {
        question:'Who has won the Uefa Champions League with 3 different clubs?',
        answers:["Cristiano Ronaldo", "Clarence Seedorf", "Olivier Giroud", "Marko Van Basten"],
        index: 3,
    },
    {
        question: "Name only player who won the Ballon d'Or between 2008-2021 except Lionel Messi or Cristiano Ronaldo.",
        answers:["Karim Benzema", "Robert Lewandowski", "Kaka", "Luka Modric"],
        index: 4,
    },
    {
        question:'Which national team has won 3 national championship in a row? (World cup and Euro)',
        answers:["Spain", "Italy", "Germany", "France"],
        index: 5,
    },
    {
        question:'Who is the Serie A 2022-2023 MVP of the season?',
        answers:["Paulo Dybala", "Victor Osimhen", "Romelu Lukaku", "Khvicha Kvaratskhelia"],
        index: 6,
    },
    {
        question:'Name a manager with a nickname "The special one"',
        answers:["Jurgen Klopp", "Pep Guardiola", "Jose Mourinho", "Sam Allardyce"],
        index: 7,
    },
    {
        question:'Which club has won the Premier League without a single loss?',
        answers:["Liverpool", "Arsenal", "Manchester United", "Manchester City"],
        index: 8,
    },
];

let userSelections = [];


Button.addEventListener("click", () => {
    calculateResult();
});



function handleUserSelection(questionIndex, selectedAnswerIndex) {
    userSelections[questionIndex] = selectedAnswerIndex;
}

function calculateResult() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userSelections[i] === questions[i].index) {
            score++;
        }
    }

    div.style.display = "none"
    Button.style.display = "none"
    let h1 = document.createElement("h1")
    h1.textContent = `Your score: ${score} out of ${questions.length}`
    container.appendChild(h1)
    // container.style.backgroundColor = "white"
}



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



function fourthQuestion() {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")




    h2.textContent = questions[3].question;
    p.textContent = questions[3].answers[0];
    pSecond.textContent = questions[3].answers[1];
    pThird.textContent = questions[3].answers[2]
    pFourth.textContent = questions[3].answers[3]

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
fourthQuestion()


function fifthQuestion() {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")




    h2.textContent = questions[4].question;
    p.textContent = questions[4].answers[0];
    pSecond.textContent = questions[4].answers[1];
    pThird.textContent = questions[4].answers[2]
    pFourth.textContent = questions[4].answers[3]

    p.addEventListener("click", () => {
        handleUserSelection(3, 0);

        p.classList.toggle("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pSecond.addEventListener("click", () => {
        handleUserSelection(3, 1);

        p.classList.remove("submit")
        pSecond.classList.toggle("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pThird.addEventListener("click", () => {
        handleUserSelection(3, 2);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.toggle("submit")
        pFourth.classList.remove("submit")
    })

    pFourth.addEventListener("click", () => {
        handleUserSelection(3, 3);

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
fifthQuestion()


function sixthQuestion () {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")




    h2.textContent = questions[5].question;
    p.textContent = questions[5].answers[0];
    pSecond.textContent = questions[5].answers[1];
    pThird.textContent = questions[5].answers[2]
    pFourth.textContent = questions[5].answers[3]

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
sixthQuestion()


function seventhQuestion (){
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")


    h2.textContent = questions[6].question;
    p.textContent = questions[6].answers[0];
    pSecond.textContent = questions[6].answers[1];
    pThird.textContent = questions[6].answers[2]
    pFourth.textContent = questions[6].answers[3]

    p.addEventListener("click", () => {
        handleUserSelection(3, 0);

        p.classList.toggle("submit")
        pSecond.classList.remove("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pSecond.addEventListener("click", () => {
        handleUserSelection(3, 1);

        p.classList.remove("submit")
        pSecond.classList.toggle("submit")
        pThird.classList.remove("submit")
        pFourth.classList.remove("submit")
    });

    pThird.addEventListener("click", () => {
        handleUserSelection(3, 2);

        p.classList.remove("submit")
        pSecond.classList.remove("submit")
        pThird.classList.toggle("submit")
        pFourth.classList.remove("submit")
    })

    pFourth.addEventListener("click", () => {
        handleUserSelection(3, 3);

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
seventhQuestion()


function eigthQuestion () {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")


    h2.textContent = questions[7].question;
    p.textContent = questions[7].answers[0];
    pSecond.textContent = questions[7].answers[1];
    pThird.textContent = questions[7].answers[2]
    pFourth.textContent = questions[7].answers[3]

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
eigthQuestion()


function ninthQuestion () {
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let pSecond = document.createElement("p");
    let pThird = document.createElement("p")
    let pFourth = document.createElement("p")


    h2.textContent = questions[8].question;
    p.textContent = questions[8].answers[0];
    pSecond.textContent = questions[8].answers[1];
    pThird.textContent = questions[8].answers[2]
    pFourth.textContent = questions[8].answers[3]

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
ninthQuestion()