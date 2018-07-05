var enter_info_quiz = $(".enter-info-quiz");
var create_quiz_1 = $(".create-quiz-1");
var create_quiz_2 = $(".create-quiz-2");
var insert_enter_quiz = $(".insert-enter-quiz");
var element_name_quiz_1 = $(".name-quiz-1");
var element_number_question_1 = $("#number-question-1");
var element_time_left_1 = $("#time-left-1");
var element_name_quiz_2 = $("#name-quiz-2");
var element_time_left_2 = $("#time-left-2");
var element_text_data_quiz = $("#text-data-quiz");

var time_left = 0, number_quiz = 0, name_quiz = "";

var object_data_quiz = {
    "name": "",
    "number_quiz": 0,
    "time_left": 0,
    "quiz": [
        {
            "question": "",
            "answera_A": "",
            "answera_B": "",
            "answera_C": "",
            "answera_D": "",
            "correct": ""
        }
    ]
}

$(create_quiz_1).click(function () {
    createManuallyQuiz();
});

function createManuallyQuiz() {
    name_quiz = element_name_quiz_1.val();
    number_quiz = element_number_question_1.val();
    time_left = element_time_left_1.val();
    var insert_html = "";

    for (var i = 0; i < number_quiz; i++) {
        insert_html += '<div class="card card-body question">\
        <h3>Nhập câu ' + (i + 1) + ':</h3>\
        <div class="form-group">\
            <input type="text" class="form-control" name="name_question" placeholder="Tên câu hỏi" onchange="changeDataQuiz(1, \"question\", 5);">\
        </div>\
        <div class="form-group">\
            <input type="text" class="form-control" name="name_answer_1" placeholder="Đáp án A">\
        </div>\
        <div class="form-group">\
            <input type="text" class="form-control" name="name_answer_2" placeholder="Đáp án B">\
        </div>\
        <div class="form-group">\
            <input type="text" class="form-control" name="name_answer_3" placeholder="Đáp án C">\
        </div>\
        <div class="form-group">\
            <input type="text" class="form-control" name="name_answer_4" placeholder="Đáp án D">\
        </div>\
    </div>';
    }

    insert_enter_quiz.html(insert_html);
}

function changeDataQuiz(pos_c, prop_c, value_c) {
    console.log("Changed");
}

function checkNameQuiz(text_name) {
    return true;
}

function checkTimeLeft(number_time_left) {
    return true;
}

function checkNumberQuiz(number_number_quiz) {
    return true;
}