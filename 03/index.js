const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

function isNewYears(){
  const now = new Date();
  return now.getMonth() === 11 && now.getDate() === 31;
}

let christmassy = false;
function fix() {
  christmassy = !christmassy;
  const [textContent, fontFamily] = christmassy
    ? [`π ${isNewYears() ? 'Happy New Years' : 'Merry Christmas'}! βοΈ`, 'Mountains of Christmas']
    : ['π Happy Halloween! π»', 'Rubik Beastly'];

  greeting.textContent = textContent
  greeting.style.fontFamily = fontFamily
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
}
btn.addEventListener('click', fix);

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Yearβs one automatically on December 31st.







