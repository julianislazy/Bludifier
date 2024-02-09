function convertSentence() {
    // Get the input sentence
    var input = document.getElementById("inputSentence").value;
    
    // Convert the input sentence into an array of characters
    var characters = input.split("");
    
    // Initialize a variable to store the modified sentence
    var output = "";
    
    // Initialize a variable to keep track of whether the next character should be replaced with "bl"
    var replaceNext = true;
    
    // Iterate through each character
    for (var i = 0; i < characters.length; i++) {
        var currentChar = characters[i];
        
        // If the current character is a letter and it should be replaced with "bl"
        if (currentChar.match(/[a-zA-Z]/) && replaceNext) {
            // Append "bl" to the output
            output += "bl";
            
            // Set replaceNext to false to skip the next character
            replaceNext = false;
        } else {
            // Append the current character to the output
            output += currentChar;
            
            // If the current character is a space, set replaceNext to true
            if (currentChar === " ") {
                replaceNext = true;
            }
        }
    }
    
    // Display the modified sentence
    document.getElementById("output").innerHTML = output;
}
