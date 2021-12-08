const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const volumeRng = document.getElementById("volume-rng")
const soundSlt = document.getElementById("sound-slt")

let audio = new Audio(soundSlt.value);
audio.volume = Number(volumeRng.value) / 100;

playBtn.addEventListener('click', () => audio.play());
pauseBtn.addEventListener('click', () => audio.pause());
stopBtn.addEventListener('click', () => {
	audio.pause();
	audio.currentTime = 0;
});
volumeRng.addEventListener('input', ({ target: { value }}) => audio.volume = Number(value) / 100);
soundSlt.addEventListener('change', ({ target: { value }}) => audio.src = value);