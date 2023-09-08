const currentDay = document.getElementById('current-day')
const currentTime = document.getElementById('current-time')
const userOnlineStatus = document.getElementById('user-online-status')
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


const date = new Date()
currentDay.innerHTML = weekday[date.getDay()]
currentTime.innerHTML = date.getUTCMilliseconds()