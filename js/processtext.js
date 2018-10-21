var processButton = document.inputForm.processButton;
function process()
{
    var inputText = document.getElementById('inputText').value;

    var wordList = inputText.split(" ");
    console.log(wordList);

    // initialize variables
    var count = 0;
    var countArray = [];

    //for loop that iterates through the string and counts the occurences of words
    for (var i = 0; i < wordList.length; i++) {
        for (var j = 0; j < wordList.length; j++) {
            if (wordList[j] == wordList[i]) {
                count += 1;
            }
        }
        countArray[i] = " " + wordList[i].toUpperCase() + " " + count;
        count = 0;
    }

    // counts the amount of duplicates in the string
    var duplicates = 0;

    // loops through and compares each word to all of the others in the list
    for (var origWord = 0; origWord < wordList.length; origWord++) {
        for (var otherWords = 0; otherWords < wordList.length; otherWords++) {
            if(countArray[otherWords] == countArray[origWord]) { //if its a duplicate, it takes the word and copies it into the previous word
                duplicates += 1;
                if(duplicates > 1) {
                    countArray.splice(otherWords, 1); //if there is at least one duplicate, it deletes the other occurences of the word in the list
                }
            }
        }
        duplicates = 0;
    }
    // places the output text
    document.getElementById('outputText').value = countArray
}
processButton.addEventListener("click", process);