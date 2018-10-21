var num = 0;
var numArray = [];
var i = 0;

function Mathfun(){

    while (num != -1)
    {
        num = prompt("Please enter a number, entering a -1 will end the function:"," ");
        numArray[i] = num;
        i++;
    }

    var max = 0;

    for(var i=0; i<numArray.length; i++)
    {
        if(max < numArray[i])
            max = numArray[i];
    }
    document.write("Max: " + max + "</br>");
    var min = max;

    for(var i=0; i<numArray.length; i++)
    {
        if (min > numArray[i])
            min = numArray[i];
    }
    document.write("Min: " + min + "</br>");
}