
function tenToSmall(num, base) //convert a base-10 number to a smaller base
{
    //the tenToSmall function is expecting a number (num) in base 10
    //it will convert the number (num) to the value of 'base'
    //num = document.toBinary.input.value; //number to convert
   // base = 2; //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't 0
    {
        smallNum = num%base + smallNum; //3%5 = 2...% returns remainder //doesn't add the nums, put it next to each other(string var)
        //setup num for the next iteration of the loop
        num = Math.floor(num/base); // floor gets rid of any remainders
    }

    return smallNum;
}

function smallToTen(num, base) //convert a small-base number to base-10
{
   // num = document.toBase10.input.value; //13
   // base= 2; //base of number to convert to base-10
    tenNum= 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to a STRING, then counts the number of characters in the string

    while(numLength > 0)
    {
        var denominator = Math.pow(10, (numLength - 1)); //gets the denominator of fraction
        // for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1001/1000...101/100 = 1...01/10=0...1/1=1...
        tenNum = tenNum + currentDigit*Math.pow(base, numLength-1);
        //currentDigit*2^3...currentDigit*2^2...currentDigit*2^1 etc.
        num = num%denominator; //reduces num for the next iteration...
        // 1101 -> 101 -> 01 -> 1 -> 0
        numLength--; //decreases the numLength value by 1..eventually it will hit zero
    }
    return tenNum;
}

function xToy(num, x, y)
{
    var num2 = smallToTen(num, x);
    var numInBase = tenToSmall(num2, y);
    return numInBase;

}