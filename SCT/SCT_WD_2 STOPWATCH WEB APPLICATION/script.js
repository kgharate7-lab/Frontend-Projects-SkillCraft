let timer = null;
let mode = "stopwatch";

let seconds = 0;
let minutes = 0;
let hours = 0;

// Preset timers (in seconds)
const presets = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
    if (timer !== null) return;

    timer = setInterval(() => {
        if (mode === "stopwatch") {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        } else {
            if (seconds === 0 && minutes === 0 && hours === 0) {
                pause();
                alert("⏰ Time's up!");
                return;
            }
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
        }
        updateDisplay();
    }, 1000);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    seconds = minutes = hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (mode !== "stopwatch") return;
    let lapTime = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
}

function setMode(selectedMode) {
    pause();
    reset();
    mode = selectedMode;

    if (mode !== "stopwatch") {
        let total = presets[mode];
        hours = Math.floor(total / 3600);
        minutes = Math.floor((total % 3600) / 60);
        seconds = total % 60;
        updateDisplay();
    }
}