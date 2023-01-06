// Create an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "Which of these is a valid way to alert a string message?",
        answer: "window.alert('message')",
        options: [
            "document.alert('message')",
            "global.alert('message')",
            "window.alert('message')"
        ]
    },
    {
        numb: 2,
        question: "Which of these is an assignment operator",
        answer: "/=",
        options: [
            "/=",
            "!==",
            "<="
        ]
    },
    {
        numb: 3,
        question: "Which event handler is used to process the Click event?",
        answer: "onclick",
        options: [
            "onclick",
            "onkeydown",
            "onmouseclick"
        ]
    },
    {
        numb: 4,
        question: "Which of these methods combines two strings?",
        answer: "concat()",
        options: [
            "append()",
            "attach()",
            "concat()"

        ]
    },
    {
        numb: 5,
        question: "What method is used to return the position of the first occurrence of a specified text in a string?",
        answer: "indexOf()",
        options: [
            "pos()",
            "indexOf()",
            "position()"
        ]
    }
]

// Getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

const option_list = document.querySelector(".option_list");

// If start quiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show the info box
};

// If exit quiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info box
};

// If continue quiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(0);
    queCounter(1);
};

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

// If next button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    } else {
        console.log("Questions completed");
    }
};

// getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    var que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    var option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>' + '<div class="option">' + questions[index].options[2] + '<span></span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }

};

let tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>'

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML('beforeend', tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");
        answer.insertAdjacentHTML('beforeend', crossIcon);

        // if answers is incorret then automatically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML('beforeend', tickIcon);
            }
        }
    }
    // once user selected disabled all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
}

function queCounter(index) {
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTag = '<span><p>' + que_count + '</p>Of<p>' + questions.length + '</p>Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
}