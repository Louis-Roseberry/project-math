
//variables
questionNumber = 0;
score = 0;

//array pour stocker les questions
titles = [];
answers = [];
imgs = [];

//the questions
addQuestion("trouve l'air de ce trapèze. (en cm^2)", "30.315cm^2", "images/trapèze1.png");
addQuestion("trouve l'air de ce rectangle.", "23.78m^2", "images/rectangle.png");
addQuestion("trouve l'air de ce cercle.", "37.6991118431dm^2", "images/cercle.png");
addQuestion("trouve le pérmimètre de ce triangle.", "18.9mm^2", "images/triangle1.png");
addQuestion("trouve l'air de ce polygone régulier.", "83.25m^2", "images/polygone regulier.png");
addQuestion("trouve l'air de ce triangle", "31.8km^2", "images/triangle2.png");
addQuestion("trouve l'air de ce losange.", "210.8cm^2", "images/losange.png");
addQuestion("trouve l'air de ce polygone régulier.", "74.175dm^2", "images/polygone régulier2.png");
addQuestion("trouve l'air de Parallélogramme.", "182dam^2", "images/paralléogramme.png");



//function pour rajouter une question
function addQuestion(title, answer, img){
    titles.push(title);
    answers.push(answer);
    imgs.push(img);
};




loadQuestion()

//loader la questions correspondant à la variable "questionNumber"
function loadQuestion(){
    if(questionNumber < titles.length){
        document.getElementById("Title").value = titles[questionNumber];
        document.getElementById("questionImg").src = imgs[questionNumber];

        //chacher les elements et montrer d'autres
        document.getElementById("checkAnswerButton").style.display = "block";
        document.getElementById("nextQuestionButton").style.display = "none";
        document.getElementById("questionReslut").style.display = "none";
        document.getElementById("AnswerInp").value = "";
        if(imgs[questionNumber] === undefined){ //cacher le tag img si il n'y a pas d'image
            document.getElementById("questionImg").style.display = "none";
        } else{
            document.getElementById("questionImg").style.display = "flex";
        };
    }else{
        document.getElementById("AnswerInp").style.display = "none";
        document.getElementById("questionReslut").style.display = "block";
        document.getElementById("questionImg").style.display = "none";
        document.getElementById("nextQuestionButton").style.display = "none";
        document.getElementById("Title").value = "Le quiz est fini"
        document.getElementById("questionReslut").value = "votre score est " + score + "/" + titles.length;
    };
};




document.getElementById("checkAnswerButton").addEventListener("click", checkAnswer);//regarder si le boutton "vérifier" est clicker

//regarder si c'est la bonne réponse
function checkAnswer(){
    if(document.getElementById("AnswerInp").value == answers[questionNumber]){
        document.getElementById("questionReslut").value = "bonne réponse";
        score++
    } else{
        document.getElementById("questionReslut").value = "mauvaise réponse";
    };

    //cacher et montrer des elements
    document.getElementById("checkAnswerButton").style.display = "none";
    document.getElementById("nextQuestionButton").style.display = "block";
    document.getElementById("questionReslut").style.display = "block";

};


document.getElementById("nextQuestionButton").addEventListener("click", nextQuestion);

function nextQuestion(){
    questionNumber++;
    loadQuestion();
};



//start the quiz
document.getElementById("startButton").addEventListener("click", startQuiz);

function startQuiz(){
    document.getElementById("startQuizDiv").style.display = "none";
    document.getElementById("quiz").style.display = "block";
};


