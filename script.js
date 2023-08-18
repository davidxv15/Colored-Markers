
const pauseButton = document.getElementById("pauseButton");
const marker2 = document.querySelector(".marker2");

let animationPaused = false;

pauseButton.addEventListener("click", () => {
  if (animationPaused) {
    marker2.style.animationPlayState = "running";
    pauseButton.textContent = "Pause Animation";
  } else {
    marker2.style.animationPlayState = "paused";
    pauseButton.textContent = "Resume Animation";
  }
  animationPaused = !animationPaused;
});
