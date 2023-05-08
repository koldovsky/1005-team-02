const days = document.querySelector('.timer-item:nth-child(1) .value');
const hours = document.querySelector('.timer-item:nth-child(2) .value');
const minutes = document.querySelector('.timer-item:nth-child(3) .value');
const seconds = document.querySelector('.timer-item:nth-child(4) .value');

const endDate = new Date('2023-05-31 23:59:59').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const difference = endDate - now;

  const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

  days.innerHTML = remainingDays.toString().padStart(2, '0');
  hours.innerHTML = remainingHours.toString().padStart(2, '0');
  minutes.innerHTML = remainingMinutes.toString().padStart(2, '0');
  seconds.innerHTML = remainingSeconds.toString().padStart(2, '0');

  if (difference < 0) {
    clearInterval(intervalId);
    days.innerHTML = '00';
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    alert('Time has run out!');
  }
}, 1000);