function checkAnswers() {
    var n = 0;
    var s = 0;
    var isChecked = false;
    var form = document.getElementById("footballQuiz");
    var questions = form.getElementsByTagName("h3");
    

    for (var i = 0; i < questions.length; i++) {
        var questionNumber = i + 1;
        var radios = form.elements["q" + questionNumber];

        if (!radios.value) {
            alert("Veuillez répondre à la question " + questionNumber);
            isChecked = true;
            return;
        }
    }
    
    if (isChecked === false) {
        {
            if (document.getElementById('q1a').checked != true) {
                n++;
            }
            if (document.getElementById('q2c').checked != true) {
                n++;
            }
            if (document.getElementById('q3a').checked != true) {
                n++;
            }
            if (document.getElementById('q4b').checked != true) {
                n++;
            }
            if (document.getElementById('q5a').checked != true) {
                n++;
            }
            if (document.getElementById('q6c').checked != true) {
                n++;
            }
            if (document.getElementById('q7a').checked != true) {
                n++;
            }
            if (document.getElementById('q8b').checked != true) {
                n++;
            }
            if (document.getElementById('q9a').checked != true) {
                n++;
            }
            if (document.getElementById('q10c').checked != true) {
                n++;
            }
            if (document.getElementById('q11a').checked != true) {
                n++;
            }
            if (document.getElementById('q12b').checked != true) {
                n++;
            }
            if (document.getElementById('q13a').checked != true) {
                n++;
            }
            if (document.getElementById('q14c').checked != true) {
                n++;
            }
            if (document.getElementById('q15b').checked != true) {
                n++;
            }
        }


    }

    s = 15 - n;
    console.log("Redirection vers resultat.html avec le score : " + s);
    window.location.href = "resultat.html?score=" + s;


}
