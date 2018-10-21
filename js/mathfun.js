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


    //Math functions
        //maximum, minimum, mean, and median
        //even numbers, odd numbers, prime numbers, and power-of-2 numbers

    //output results

}