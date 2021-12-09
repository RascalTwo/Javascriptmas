const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const volumeRng = document.getElementById("volume-rng")
const soundSlt = document.getElementById("sound-slt")
const bell = (() => {
	const bell = document.getElementById("bell");
	let timeout;

	const stop = () => {
		clearTimeout(timeout);
		bell.style.animationPlayState = 'paused';
	}

	const start = () => {
		clearTimeout(timeout);
		bell.style.animationPlayState = 'running';
		stopAnimation = setTimeout(stop, (audio.duration - audio.currentTime) * 1000);
	}

	return { stop, start };
})();
bell.stop();


let audio = new Audio(soundSlt.value);
audio.volume = Number(volumeRng.value) / 100;


playBtn.addEventListener('click', () => {
	audio.play();
	bell.start();
});
pauseBtn.addEventListener('click', () => {
	audio.pause();
	bell.stop();
});
stopBtn.addEventListener('click', () => {
	audio.pause();
	audio.currentTime = 0;
	bell.stop();
});
volumeRng.addEventListener('input', ({ target: { value }}) => audio.volume = Number(value) / 100);
soundSlt.addEventListener('change', ({ target: { value }}) => {
	audio.src = value;
	bell.stop();
});

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped. 

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.