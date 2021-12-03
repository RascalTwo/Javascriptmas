const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

[christmasBtn, snowBtn].forEach(btn => btn.addEventListener('change', ({ target: { checked, value } }) => {
	if (!checked) return;
	body.className = value;
	greeting.textContent = checked && value === 'christmas' ? '🎅 Merry Christmas!' : '☃️ Happy Holidays!'
}));
// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.