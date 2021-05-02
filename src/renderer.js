let buttonRun = document.getElementById("button")
let timerInput = document.getElementsByClassName("time")[0];
let timerShow = document.getElementById("timer");
buttonRun.addEventListener('click', function() {
let timeMinut;
timeMinut = parseInt(timerInput.value) * 60
timer = setInterval(function () {
    var seconds = timeMinut%60
    var minutes = timeMinut/60%60
    var hour = timeMinut/60/60%60
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds};`
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)
})

