let screen = document.getElementById("screen");

function addCharacter(char) {
	if (screen.innerHTML === "0") {
		screen.innerHTML = char;
	} else {
		screen.innerHTML += char;
	}
}

function clearScreen() {
	screen.innerHTML = "0";
}

function deleteCharacter() {
	screen.innerHTML = screen.innerHTML.slice(0, -1);
	if (screen.innerHTML === "") {
		screen.innerHTML = "0";
	}
}

function calculate() {
	let result = eval(screen.innerHTML);
	screen.innerHTML = result;
}
