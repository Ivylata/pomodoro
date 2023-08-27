 const startE1 = document.getElementById("start");
 const stpE1 = document.getElementById("stopp");
 const restE1 = document.getElementById("resett");
 const timerE1 = document.getElementById("timer")

let interval;

let timeLeft = 1500;


function updateTimer(){
    let minutes = Math.floor(timeLeft/60);
    let second = timeLeft % 60;
let formattedTime = `${minutes.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")} `;

    timerE1.innerHTML = formattedTime;
}


 function startTimer(){
interval = setInterval(()=>{ 
    timeLeft--;
    updateTimer();
    if(timeLeft === 0){
        clearInterval(interval);
        alert("Time's Up!");
        timeLeft = 1500;
        updateTimer();
    }
},1000);
}

function stopTimer()
{
clearInterval(interval);
}

function resetTimer(){
clearInterval(interval);
timeLeft = 1500;
updateTimer();
}

 startE1.addEventListener("click", startTimer);
 stpE1.addEventListener("click", stopTimer);
 restE1.addEventListener("click", resetTimer);