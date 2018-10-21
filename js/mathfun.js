var numArray = [];
var input = 0;

function enterNum() {

    //Prompt user for numbers
    while (input != "-1") {
        input = prompt("Enter any number. Enter -1 to stop:", "");
        numArray.push(input);
    }

    console.log(numArray);

    //Delete -1 from the end of the array
    if (numArray[numArray.length - 1] == '-1') {
        numArray.pop();
    }

    console.log(numArray);

    //FINDING SUM
    var sum = 0;
    var intNum;
    for (var i=0; i<numArray.length; i++) {
        intNum = parseInt(numArray[i],10);
        sum += intNum;
    }
    console.log(sum);

    //FINDING MAX
    var maxVal = Math.max.apply(null, numArray);
    console.log(maxVal);

    //FINDING MIN
    var minVal = Math.min.apply(null, numArray);
    console.log(minVal);

    //FINDING MEAN
    var mean = sum/numArray.length;
    console.log(mean);

    //FINDING MEDIAN
    var median = 0
    numArray.sort();
    if (numArray.length % 2 === 0) {
        console.log("Num1: " + parseInt(numArray[numArray.length/2 - 1], 10));
        console.log("Num2: " + parseInt(numArray[numArray.length / 2],10));
        var num1 = parseInt(numArray[numArray.length/2 - 1], 10);
        var num2 = parseInt(numArray[numArray.length / 2],10)
        median = (num1 + num2) / 2;
    } else {
        median = parseInt(numArray[(numArray.length - 1) / 2],10);
    }

    console.log(median);

    //even numbers, odd numbers, prime numbers, and power-of-2 numbers

    //output results onto the screen

}