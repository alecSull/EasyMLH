/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
var fullscreenToggle = true;
var audioToggle = true;
var keyShortsToggle = true;
var immersiveToggle = true;

var audioPlayer = document.getElementById("player");
var keyShortsMenu = document.getElementById("keyshorts");

/* View in fullscreen */
function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
	}
}

/* Close fullscreen */
function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { /* Firefox */
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE/Edge */
		document.msExitFullscreen();
	}
}

function toggleFullscreen() {
	if (fullscreenToggle) {
		openFullscreen();
		fullscreenToggle = false;
	}
	else {
		closeFullscreen();
		fullscreenToggle = true;
	}
}

function toggleMusic() {
	if (audioToggle) {
		audioPlayer.play();
		audioToggle = false;
	}
	else {
		audioPlayer.pause();
		audioToggle = true;
	}
}

function toggleKeyshorts() {
	if (keyShortsToggle) {
		keyShortsMenu.style.display = "none";
		keyShortsToggle = false;
	}
	else {
		keyShortsMenu.style.display = "block";
		keyShortsToggle = true;
	}
}

function toggleImmersive() {
	if (immersiveToggle) {
		keyShortsMenu.style.display = "none";
		audioPlayer.play();
		openFullscreen();
		immersiveToggle = false;
		keyShortsToggle = false;
		audioToggle = false;
		fullscreenToggle = false;
	}
	else {
		keyShortsMenu.style.display = "block";
		audioPlayer.pause();
		closeFullscreen();
		immersiveToggle = true;
		keyShortsToggle = true;
		audioToggle = true;
		fullscreenToggle = true;
	}
}

// Toggle Fullscreen
document.addEventListener("keypress", function (event) {
	if (event.keyCode == 102) {
		toggleFullscreen();
	}
});

// Toggle Pause/Play
document.addEventListener("keypress", function (event) {
	if (event.keyCode == 112) {
		toggleMusic();
	}
});

// Toggle Keyboard Shortcuts Menu
document.addEventListener("keypress", function (event) {
	if (event.keyCode == 107) {
		toggleKeyshorts();
	}
});

// Toggle Immersive Experience
document.addEventListener("keypress", function (event) {
	if (event.keyCode == 105) {
		toggleImmersive();
	}
});

// Volmue Up
document.addEventListener("keypress", function (event) {
	if (event.keyCode == 43) {
		audioPlayer.volume = audioPlayer.volume + 0.05;
	}
});

// Volume Down
document.addEventListener("keypress", function (event) {
	if (event.keyCode == 45) {
		audioPlayer.volume = audioPlayer.volume - 0.05;
	}
});





