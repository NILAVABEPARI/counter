"use strict";

let value = 0;

document.querySelector(".increase").addEventListener("click", function () {
	value++;
	if (value > 0) {
		document.querySelector("h2").style.color = "green";
	}
	if (value === 0) {
		document.querySelector("h2").style.color = "#222";
	}
	document.querySelector("h2").textContent = value;
});

document.querySelector(".decrease").addEventListener("click", function () {
	value--;
	if (value < 0) {
		document.querySelector("h2").style.color = "red";
	}
	if (value === 0) {
		document.querySelector("h2").style.color = "#222";
	}
	document.querySelector("h2").textContent = value;
});

document.querySelector(".reset").addEventListener("click", function () {
	value = 0;
	document.querySelector("h2").textContent = value;
	document.querySelector("h2").style.color = "#222";
});
