//update calendar date
//calculate time from visit to midnight then set an interval for every 24 hours after
//this puts today's date in the calendar icon
const calDate = document.querySelector("#cal text");
let today = new Date();
calDate.innerHTML = today.getDate();
let now = new Date();

let updateDate = setTimeout(setIntervalTimer,(24 - now.getHours() - (now.getMinutes() / 60 )) * 3600000);

function setIntervalTimer() {
  setInterval(() => {
    setClock();
  }, 86400000);
}

function setClock() {
  let today = new Date();
  calDate.innerHTML = today.getDate();
}
