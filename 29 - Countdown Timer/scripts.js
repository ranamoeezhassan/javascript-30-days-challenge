let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll(".timer__button")

function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/ 1000);
        if (secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)

}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds.toString().padStart(2, '0')}`;
    timeDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();

    endTimeDisplay.textContent = `Be Back At ${hours > 12 ? hours - 12 : hours}:${minutes.toString().padStart(2, '0')}`;

}

function startTime(){
    timer(parseInt(this.dataset.time))
}


buttons.forEach(button => button.addEventListener('click', startTime));
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    this.reset();
    timer(mins * 60);
})
