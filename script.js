let [seconds, minutes] = [0, 0];
let displayTime = null;
let timer = null;


function updateDisplay() {
    displayTime.innerHTML = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}


function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
        }
    }
    updateDisplay();
}


function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}


function watchStop() {
    clearInterval(timer);
}


function plusTime() {
    seconds += 5;
    if (seconds >= 60) {
        seconds -= 60;
        minutes++;
    }
    updateDisplay();
}


function solidTime() {
    if (seconds < 5) {
        if (minutes > 0) {
            minutes--;
            seconds += 55;
        } else {
            seconds = 0;
        }
    } else {
        seconds -= 5;
    }
    updateDisplay();
}


document.addEventListener("DOMContentLoaded", () => {
    displayTime = document.getElementById("displayTime");
    displayTime.innerHTML = "00:00";
});
