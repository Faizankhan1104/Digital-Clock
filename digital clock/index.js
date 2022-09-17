const hourEl = document.getElementById("Hour");
const minuteEl = document.getElementById("Minutes");
const secondEl = document.getElementById("Second");
const ampmEl = document.getElementById("ampm");

 function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);

    setTimeout(() => {
        updateClock()
    }, 1000)

}
updateClock()

// function displaytime(){
//     var dateTime = new Date();
//     var hr = dateTime.getHours();
//     var min = dateTime.getMinutes();
//     var sec = dateTime.getSeconds();
//     var session = document.getElementById('ampm');
       
//     document.getElementById('Hour').innerHTML = hr;
//     document.getElementById('Minutes').innerHTML = min;
//     document.getElementById('Second').innerHTML = sec;
// }
// setInterval(displaytime, 10);