
// let startEl = document.getElementById('start');
// startEl.addEventListener('mousedown', () => {
//     document.getElementById('one').classList.add("show");
//     startTimer();
// })
// startEl.addEventListener('mouseup', () => {
//     document.getElementById('one').classList.remove('show')
// })

// let stopEl = document.getElementById('stop');
// stopEl.addEventListener('mousedown', () => {
//     document.getElementById('two').classList.add("show");
//     stopTimer();
// })
// stopEl.addEventListener('mouseup', () => {
//     document.getElementById('two').classList.remove('show')
// })

// let resetEl = document.getElementById('reset');
// resetEl.addEventListener('mousedown', () => {
//     document.getElementById('three').classList.add("show");
//     resetTimer();
// })
// resetEl.addEventListener('mouseup', () => {
//     document.getElementById('three').classList.remove('show')
// })

// let hour = 0;
// let min = 0;
// let second = 0;
// let runningTimer;
// function startTimer() {
//     runningTimer = setInterval(() => {
//         if (second === 60) {
//             min++;
//             second = 0;
//             if (min === 60) {
//                 hour++;
//                 min = 0;
//             }
//         }
//         document.getElementById('timeText').textContent = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
//         second++;
//     }, 1000)
// }

// function stopTimer() {
//     clearInterval(runningTimer);
// }

// function resetTimer() {
//     document.getElementById('timeText').textContent = "00:00:00";
// }

