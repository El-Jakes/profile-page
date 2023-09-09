<<<<<<< HEAD
=======
const currentDay = document.getElementById('current-day')
const currentTime = document.getElementById('current-time')
const userOnlineStatus = document.getElementById('user-online-status')
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


const date = new Date()
currentDay.innerHTML = weekday[date.getDay()]
currentTime.innerHTML = `${date.getUTCMilliseconds()} MS, `
>>>>>>> 30d9af77e633298ea13f9315ca79a86c24b06132
