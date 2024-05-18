const endDate = "18 May 2024 10:00:00 PM";

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    
    //console.log(end);
    //console.log(now);

    //to stop the countdown
    if(diff < 0) return;

    const diff = ( end - now )/1000;
    //in milli seconds

    //convert into days
    inputs[0].value = Math.floor(diff /3600 / 24);
    //hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    //seconds
    inputs[3].value = Math.floor(diff) % 60;
}

//clock();

setInterval(
    () => {
        clock()
    },
    1000
)