var number = 0;
var numArray = [];

function calculate() {

    while (num != -1)
    {
        number = prompt("Enter any number. To stop enter -1:"," ");
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