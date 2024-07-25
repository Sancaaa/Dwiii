document.addEventListener("DOMContentLoaded", function () {
  let soundload = document.getElementById("soundload");

  soundload.play();

  setTimeout(function () {
    soundload.pause();
    soundload.currentTime = 0;
  }, 1500);
});

let currentDiv = 1;

function handleButtonClick(action) {
  if (action === "yes") {
    showDiv("div5");
    playAudioAndAnimate();
  } else if (action === "no") {
    if (currentDiv === 1) {
      showDiv("div2");
      currentDiv = 2;
    } else if (currentDiv === 2) {
      showDiv("div3");
      currentDiv = 3;
    } else if (currentDiv === 3) {
      showDiv("div4");
      currentDiv = 4;
    }
  } else if (action === "restart") {
    showDiv("div1");
    currentDiv = 1;
  }
  setTimeout(function () {
    buttonEnabled = true;
  }, 3000);
}

function showDiv(divId) {
  const divs = ["div1", "div2", "div3", "div4", "div5"];
  divs.forEach((id) => {
    const div = document.getElementById(id);
    if (id === divId) {
      div.classList.remove("hidden");
      div.style.display = "flex";
    } else {
      div.classList.add("hidden");
      div.style.display = "none";
    }
  });
}

function startAnimation() {
  const ballooncon = document.querySelector("#div5 .ballooncon");
  ballooncon.classList.remove("fly-animation");
  void ballooncon.offsetWidth;
  ballooncon.classList.add("fly-animation");
  console.log("Animation started");
}

function playAudioAndAnimate() {
  const sound = document.getElementById("sound5");
  sound.currentTime = 2;
  sound.play();
  startAnimation();

  setTimeout(function () {
    audio.pause();
    audio.currentTime = seconds;
  }, 6000);
}

function playAudio1(seconds) {
  var audio = document.getElementById("sound1");
  audio.currentTime = seconds;
  audio.play();

  setTimeout(function () {
    audio.pause();
    audio.currentTime = seconds;
  }, 1500);
}

function playAudio2(seconds) {
  var audio = document.getElementById("sound2");
  audio.currentTime = seconds;
  audio.play();

  setTimeout(function () {
    audio.pause();
    audio.currentTime = seconds;
  }, 1500);
}

function playAudio3(seconds) {
  var audio = document.getElementById("sound3");
  audio.currentTime = seconds;
  audio.play();

  setTimeout(function () {
    audio.pause();
    audio.currentTime = seconds;
  }, 1500);
}

function playAudio4(seconds) {
  var audio = document.getElementById("sound4");
  audio.currentTime = seconds;
  audio.play();

  setTimeout(function () {
    audio.pause();
    audio.currentTime = seconds;
  }, 6000);
}
