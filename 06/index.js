const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

let removing;
let music = new Audio('https://www.coralesangaudenzio.it/Audio/cn09/mg15.mp3');
function deChristmassify() {
  christmassifierBtn.textContent = 'Christmassify';
  greeting.classList.remove('christmassified');
  music.pause();
  music.fastSeek(0);
}

function christmassifyName() {
  if (greeting.classList.toggle('christmassified')) {
    if (removing) clearTimeout(removing);
    music.play();
    removing = setTimeout(deChristmassify, music.duration * 1000 || 5000);
    christmassifierBtn.textContent = 'De-christmassify';
  } else {
    deChristmassify();
  }
   // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.

