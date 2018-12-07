function checkAnswers()
{
    var feedback = [];
    //keep score
    var score = 0;
    //check answer 1
    if(document.quiz.a1.value === 'Fall')
    {
        score++;
        feedback.push("Question 1 is correcto!");
    } else {
        feedback.push("WRONG! Question 1 was Fall.");
    }


    //check answer 2
    var q2answer = document.quiz.a2.value.toLowerCase();
    if(q2answer === 'rain')
    {
        score = score + 1;
        feedback.push("Question 2 is correcto!!");
    } else {
        feedback.push("WRONG! Question 2 was Rain.");
    }


    //check answer 3
    if(document.quiz.a3B.checked === true && document.quiz.a3D.checked === true)
    {
        if(document.quiz.a3A.checked === true || document.quiz.a3C.checked === true || document.quiz.a3E.checked ===true)
        {
            feedback.push("WRONG! Question 3 was Strawberries and Broccoli.");
        }
        else{
            score++;
            feedback.push("Question 3 is CORRECTO!!");
        }

    }
    else{
        feedback.push("WRONG! Question 3 was Strawberries and Broccoli.");
    }

    //check answer 4
    if(document.quiz.a4.value === 'Giraffe')
    {
        score++;
        feedback.push("Question 4 is correcto!");
    } else {
        feedback.push("WRONG! It's a giraffe.");
    }


    //check answer 5
    if(document.quiz.a5A.checked === true)
    {
        if(document.quiz.a5B.checked === true || document.quiz.a5C.checked === true || document.quiz.a5D.checked ===true)
        {
            feedback.push("WRONG! Question 5 was Duh...");
        }
        else{
            score++;
            feedback.push("Question 5 is CORRECTO!!");
        }
    }
    else{
        feedback.push("WRONG! Question 5 was Duh...");
    }


    //check answer 6
    var q6answer = document.quiz.a6.value.toLowerCase();
    if(q6answer === 'mario')
    {
        score = score + 1;
        feedback.push("Question 6 is correcto!!");
    } else {
        feedback.push("WRONG! Question 6 was Mario");
    }

    return feedback[0] + '<br>' + feedback[1]+ '<br>' +feedback[2]+ '<br>' + feedback[3] + '<br>' + feedback[4]+ '<br>' + feedback[5] + '<br>' + "Your score is: " + score;
}