let timeEl = document.querySelector(".timer");
let timer = null;
let [hours,minutes,seconds] = [0,0,0];

function container(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? ("0" + hours) : hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ? ("0" + seconds) : seconds;

    timeEl.innerHTML = h+":"+m+":"+s;
}

function startTimer() {
    if(timer!=null) {
        clearInterval(timer);
    }
    timer = setInterval(container,1000);
    console.log(timer)
}

function stopTimer() {
    clearInterval(timer);
    console.log(timer)
}

function resetTimer(){
    clearInterval(timer);
    [hours,minutes,seconds] = [0,0,0];
    timeEl.innerHTML = "00:00:00";
    console.log(timer);
}