function handleKeyDown(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    const keyContainer = document.querySelector(
      `div[data-key="${event.keyCode}"]`
    );
    keyContainer.classList.add("playing");
    // setTimeout(function () {
    //   keyContainer.classList.remove("playing");
    // }, 300); Found a better way to toggle this
  }
}

function removeTransition(event){
  if (event.propertyName !== "transform"){
    this.classList.remove("playing")
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", removeTransition)
})

window.addEventListener("keydown", handleKeyDown);
