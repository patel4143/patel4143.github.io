/* Project 1 Temperature Bug */
function temperatureBug()
{
    var temp = Number(document.project1.num1.value);
    var image = document.getElementById("weather");
    if (temp >= 80)
    {
        image.src = "img/summer.png";
        return "Summer";
    }
    else if (temp >= 60)
    {
        image.src = "img/spring.png";
        return "Spring";
    }
    else if (temp >= 40)
    {
        image.src = "img/autumn.png";
        return "Autumn";
     }
     else if (temp >= 0)
    {
        image.src = "img/winter.png";
        return "Winter";
    }
     else
     {
         image.src = "img/cold.png";
         return "Winter";
     }
 }
 /* Project 2 Calorie Counter*/
function  calorieCounter()
{   //capture a score from HTML
    var exercise = document.getElementById('exercises').value ;
    var time = Number(document.project2.time1.value) ;
    if (exercise === 'bowling') // an activity
    {
        return time*3 + " calories";
    }
    else if (exercise === "golfing" )
    {
        return time * 4 + " calories";
    }
    else if(exercise === 'jogging')
    {
        return time*3.5 + " calories";
    }
    else if(exercise === 'darts')
    {
       return time*2.5 + " calories";
    }

}


/* Project 3 Assign Grade */
function  assignGrade()
{   //capture a score from HTML
    var score = Number(document.project3.num1.value);
//create logic that outputs different letter grade depending on score input
    if (score >= 90) // A
    {
        return "A";
    }
    else if (score >= 80)
    {
        return "B";
    }
    else if(score >= 70)
    {
        return "C";
    }
    else if(score >= 60)
    {
        return "D";
    }
    else if(score >= 50)
    {
        return "F+"
    }
    else
    {
        return "F";
    }
}