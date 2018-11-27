/*

Gameplan:

HTML:
(*) Calculator Window for operations to be shown along with result
()Number buttons for the calc
()Operator buttons(+,-,/,*,etc.)
()'=' button
()Reset or Clear button

JavaScript:
()Function that captures what was typed into the calcWindow
()Function that will add numbers, subtract,etc
*/
function calculate(expression)
{
    //'expression' is a STRING of everything in your calcWindow
    //We need to EXTRACT the first number from the 'expression'
    //expression = 1 + 2
    // var firstNum =Number(expression.substr(0,1));
    //  var operator= expression.substr(1,1); //capture the '+'
    //  var secondNum= Number(expression.substr(2,1)); //2 is the index(0,1,2...) you start at, 1 is the length

    if (expression.substr(1,1) === '+')
    {
        var firstNum =Number(expression.substr(0,1));
        var operator= expression.substr(1,1);
        var secondNum= Number(expression.substr(2,2));
    }
    else if (expression.substr(1,1) === '-')
    {
        var firstNum =Number(expression.substr(0,1));
        var operator= expression.substr(1,1);
        var secondNum= Number(expression.substr(2,2));
    }
    else if (expression.substr(1,1) === '/')
    {
        var firstNum =Number(expression.substr(0,1));
        var operator= expression.substr(1,1);
        var secondNum= Number(expression.substr(2,2));
    }
    else if (expression.substr(1,1) === '*')
    {
        var firstNum =Number(expression.substr(0,1));
        var operator= expression.substr(1,1);
        var secondNum= Number(expression.substr(2,2));
    }
    else if (expression.substr(1,1) === '^')
    {
        var firstNum =Number(expression.substr(0,1));
        var operator= expression.substr(1,1);
        var secondNum= Number(expression.substr(2,2));
    }
    else
    {
        var firstNum =Number(expression.substr(0,2));
        var operator= expression.substr(2,1);
        var secondNum= Number(expression.substr(3,2));
    }


    if (operator === '+')//that means I add firstNum & secondNum
    {
        return addNums(firstNum,secondNum); //returns the result of calling 'addNums'
                                            //after sending it firstNum & secondNum
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum,secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum,secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum,secondNum);
    }
    else if (operator === '^')
    {
        return powerNums(firstNum,secondNum);
    }
}

function addNums(p1,p2)
{
    //p1 and p2 are sent to addNums...to do this:
    return p1+p2;
}
function subtractNums(p1,p2)
{
    return p1-p2;
}
function divideNums(p1,p2)
{
    return p1/p2;
}
function multiplyNums(p1,p2)
{
    return p1*p2;
}
function powerNums(p1,p2)
{
    return Math.pow(p1, p2)
}