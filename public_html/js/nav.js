// see this
// https://community.cyberpanel.net/t/how-can-i-activate-cors-for-my-vps-with-cyber-panel/39310/2


/* constant variables for elements and URLs */
const nav = document.querySelector('nav');
const navURL = 'https://582multi.media/nav.html';

/* reusable async/await function to fetch common HTML elements */
async function fetchHTML(url, element){
  const response = await fetch(url);
  const data = await response.text();
  element.innerHTML = data;
}

/* async/await function to fetch specific elements */
async function getCommon(){
  const testHTML = await fetchHTML(navURL, nav);
  setCalendar();
}
// call the function
getCommon();

function setCalendar() {
  //this puts today's date in the calendar icon
  const calDate = document.querySelector("#cal text");
  //console.log(calDate.innerHTML);

  let today = new Date();
  calDate.innerHTML = today.getDate();
}

//update calendar date
//calculate time from visit to midnight then set an interval for every 24 hours after
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
