// Create an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "Which of these is a valid way to alert a string message?",
        answer: "window.alert.('message')",
        options: [
            "document.alert('message')",
            "global.alert('message')"
        ]
    },
    {
        numb: 2,
        question: "Which of these is an assignment operator",
        answer: "/=",
        options: [
            "!==",
            "<="
        ]
    },
    {
        numb: 3,
        question: "Which event handler is used to process the Click event?",
        answer: "onclick",
        options: [
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
            "attach()"
        ]
    },
    {
        numb: 5,
        question: "What method is used to return the position of the first occurrence of a specified text in a string?",
        answer: "indexOf()",
        options: [
            "pos()",
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
    const option_list = document.querySelector(".option_list");
    var que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    var option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option_list.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }

};

function queCounter(index) {
const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTag = '<span><p>' + que_count + '</p>Of<p>' + questions.length + '</p>Questions</span>';
}