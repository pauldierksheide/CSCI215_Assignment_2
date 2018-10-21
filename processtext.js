var processButton = document.inputForm.processButton;
function process()
{
    var inputText = document.getElementById('inputText').value;

    var wordList = inputText.split(" ");
    var count = 0;
    var countArray = [];
    for (var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        for (var j = 0; j < wordList.length; j++) {
            if (wordList[j] == wordList[i]) {
                count += 1;
            }
        }
        countArray[i] = " " + wordList[i].toUpperCase() + " " + count;
        count = 0;
    }

    var duplicates = 0;
    for (var m = 0; m < wordList.length; m++) {
        for (var n = 0; n < wordList.length; n++) {
            if(countArray[n] == countArray[m]) {
                duplicates += 1;
                if(duplicates > 1) {
                    delete countArray[n];
                }
            }
        }
        duplicates = 0;
    }
    outputText = document.getElementById('outputText').value = countArray;
}
processButton.addEventListener("click", process);