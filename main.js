var button = document.getElementById("treeGrow");

function checkForm() {
	var enteredLines = document.getElementById("treeHeight").value;
	var enteredChar = document.getElementById("treeChar").value;
	if (enteredLines.value === "" || enteredChar === "") {
		alert("Both fields must have a value");
		return false;
	} else {
		buildTree(enteredLines, enteredChar);
		return true;
	}
}

button.addEventListener("click", checkForm);

function buildTree(lineNumber, userChar){
	var space = " "
	var treeTest = "";
	var spaces = lineNumber - 1; 
	var charTimes = lineNumber - (lineNumber - 1)
	for (var i = 1; i < lineNumber; i++) {
		var charPrint = (userChar.repeat(charTimes))
		var newSpace = (space.repeat(spaces));
		console.log(newSpace + charPrint);
		spaces--
		charTimes++
		charTimes++
	}
}