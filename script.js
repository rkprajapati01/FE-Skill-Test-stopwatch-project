// Variables declaration
let hour = 0;
let min = 0;
let second = 0;
let miliSecond = 0;
let runningTimer;
let timerRunningStatus = false;

// Accessing DOM elements
let startEl = document.getElementById('startBtn');
let stopEl = document.getElementById('stopBtn');
let resetEl = document.getElementById('resetBtn');
let containerEl = document.getElementById('container');

// Event listening
document.addEventListener('DOMContentLoaded', () => {
    updateBackground(0);
})

startEl.addEventListener('mousedown', () => {
    updateBackground(1);
    if (!timerRunningStatus) {
        startTimer();
        startEl.classList.add('active');
        stopEl.classList.remove('active');
    }
})
startEl.addEventListener('mouseup', () => {
    updateBackground(0);
})

stopEl.addEventListener('mousedown', () => {
    updateBackground(2);
    if (timerRunningStatus) {
        stopTimer();
        stopEl.classList.add('active');
        startEl.classList.remove('active');
    }
})
stopEl.addEventListener('mouseup', () => {
    updateBackground(0);
})

resetEl.addEventListener('mousedown', () => {
    updateBackground(3);
    resetTimer();
    startEl.classList.remove('active');
    stopEl.classList.remove('active');
})
resetEl.addEventListener('mouseup', () => {
    updateBackground(0);
})

// Timer start function declaration
function startTimer() {
    timerRunningStatus = true;
    runningTimer = setInterval(() => {
        if (miliSecond === 100) {
            second++;
            miliSecond = 0;
        }
        if (second === 60) {
            min++;
            second = 0;
        }
        if (min === 60) {
            hour++;
            min = 0;
        }
        let timeStr = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${miliSecond.toString().padStart(3, '0')}`;
        document.getElementById('timeText').textContent = timeStr;
        miliSecond++;
    }, 10)
}

// Timer stop function declaration
function stopTimer() {
    timerRunningStatus = false;
    clearInterval(runningTimer);
}

// Timer reset function declaration
function resetTimer() {
    stopTimer();
    document.getElementById('timeText').textContent = "00:00:00:000";  //initial timer display
    hour = 0;
    min = 0;
    second = 0;
    miliSecond = 0;
}

//function for button click effect on background

function updateBackground(id) {
    let bgUrl;
    switch (id) {
        case 1:
            bgUrl = "url(utilities/sw1.png)";
            break;
        case 2:
            bgUrl = "url(utilities/sw2.png)";
            break;
        case 3:
            bgUrl = "url(utilities/sw3.png)";
            break;
        default:
            bgUrl = "url(utilities/sw.png)";
            break;
    }

    containerEl.style.backgroundImage = bgUrl;
}



