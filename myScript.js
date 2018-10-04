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
    var exercise = document.project2.word1.value.toLowerCase();
    var time = document.project2.time1.value;
    if (exercise === 'bowling') // an activity
    {
        if (time == '30')
        {
            return "You burned 90 calories";
        }
        else if (time == '60')
        {
            return "You burned 180 calories";
        }
    }
    else if (exercise === "golfing" )
    {
        if (time == '30')
        {
            return "You burned 120 calories";
        }
        else if (time == '60')
        {
            return "You burned 240 calories";
        }
    }
    else if(exercise === 'jogging')
    {
        if (time == '30')
        {
            return "You burned 100 calories";
        }
        else if (time == '60')
        {
            return "You burned 200 calories";
        }
    }
    else if(exercise === 'darts')
    {
        if (time == '30')
        {
            return "You burned 70 calories";
        }
        else if (time =='60')
        {
            return "You burned 140 calories";
        }
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