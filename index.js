const currentDay = document.getElementById("current-day");
const currentTime = document.getElementById("current-time");
const userOnlineStatus = document.getElementById("user-online-status");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];



const date = new Date();
currentDay.innerHTML = weekday[date.getDay()];
currentTime.innerHTML = `${date.getUTCMilliseconds()} MS, `;

// const secondsToMilliseconds = 60 *1000
// const minutesToMilliseconds = secondsToMilliseconds * 60
// const hoursToMilliseconds = minutesToMilliseconds * 60

// const timeInMilliseconds = secondsToMilliseconds + minutesToMilliseconds + hoursToMilliseconds

// console.log(timeInMilliseconds)
