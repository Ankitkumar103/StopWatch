let hour = 0;
let min = 0;
let sec = 0;
let minSec = 0;
let timer = false;

function start() {
    timer = true;
    stopWatch();
}
function pause() {
    timer = false;
}
function reset() {
    timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    minSec = 0;
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min-sec").innerHTML = "00";
}

function stopWatch() {
    if (timer == true) {
        minSec = minSec + 1;

        if (minSec == 100) {
            sec = sec + 1;
            minSec = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hour = hour + 1;
            sec = 0;
            min = 0;
        }

        let hourString = hour;
        let minString = min;
        let secString = sec;
        let minSecString = minSec;

        if (hour < 10) {
            hourString = "0" + hourString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (minSec < 10) {
            minSecString = "0" + minSecString;
        }

        document.getElementById("min-sec").innerHTML = minSecString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hour").innerHTML = hourString;

        setTimeout("stopWatch()", 7);
    }
}