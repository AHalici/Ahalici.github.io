function makeBigger() {
    alert("Hello World!");
    document.getElementById("textInput").style.fontSize = "4em";
}

function applyStyle() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        alert("Fancy Radio Button Pressed!");
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        alert("Boring Radio Button Pressed!");
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

function toUpperCaseAndMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        for (var j = 0; j < words.length; j++) {
            words[j] = words[j].toUpperCase();
        }
        if (sentences[i].trim() !== "") { // Check if the sentence is not empty
            sentences[i] = words.join(" ") + "-Moo"; // Add "-Moo" at the end of each non-empty sentence
        }
    }
    textInput.value = sentences.join(".");
}


