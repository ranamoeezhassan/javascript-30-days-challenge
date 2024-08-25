/* Select elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton(event) {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  const skipValue = parseFloat(this.dataset.skip);
  // const skipValue = parseFloat(this.getAttribute('data-skip'));

  video.currentTime += skipValue;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event){
    const scrubTime = parseFloat((event.offsetX / progress.clientWidth) * video.duration);
    video.currentTime = scrubTime;
}

/* Add event listeners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress)

toggle.addEventListener("click", togglePlay);

let mousedown = false;
progress.addEventListener("click", scrub);
//Originally, I added a condition in scrub function itself that checked the mousedown flag but I found Wes approach better 
// progress.addEventListener("mousemove", () => scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);


skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("click", handleRangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeUpdate));
