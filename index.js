const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];


const hours = currentDate.getUTCHours().toString().padStart(2, '0');
const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');


const currentTime = `${hours}:${minutes}:${seconds}`;


document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;
