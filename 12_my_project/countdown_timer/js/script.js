const endDate = "20 August 2024 00:00 AM ";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const newDate = new Date();
    const diff = (end - newDate) / 1000;

    if (diff < 0) {
        return;
    }
    //convert into days
    const days = Math.floor((diff / 3600) / 24);
    inputs[0].value = days;
    const hours = Math.floor((diff / 3600) % 24);
    inputs[1].value = hours;
    const minutes = Math.floor((diff / 60) % 60);
    inputs[2].value = minutes;
    const seconds = Math.floor(diff % 60);
    inputs[3].value = seconds;
}

clock();
setInterval(() => {
    clock();
}, 1000)


//================\\
// 1day = 24 hr
// 1hr= 60 Min
//1min = 60 sec
// 1sec= 1000 mili sec