function populate() {
    if (quiz.isEnded()) {

    } else
        var quiz = document.getElementById("questions");
    var quiz = new quiz(questions);
    element.innerHTML = quiz.getQuestionIndex().text;

    var choice = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices(i);
    }
}
var questions = [
    new Questions("which is not an object oriented programing?", ["java", "C++", "C", "C#"], "C"),
    new Question("Which Language is used for styling web pages?" ["Html", "CSS", "javascript", "Xml"], "CSS"),
    new Question("There are _____________ main components of object oriented programming?" ["1", "2", "3", "4", "5"], "4"),
    new Question("Which language is used for web app?" ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a_____________." ["Language", "Library", "Framework", "All"], "All")
];