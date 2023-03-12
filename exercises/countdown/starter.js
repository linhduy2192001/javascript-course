window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");

  function countDown(date) {
    const end = new Date(date).getTime();
    let current = new Date().getTime();
    if (isNaN(end) || end - current <= 0) return;
    setInterval(caculate, 1000);
    function caculate() {
      let days, hours, minutes, seconds;
      const now = new Date(); //Fri Mar 10 2023 18:31:55 GMT+0700 (Indochina Time)
      const start = now.getTime();
      let timeRemaining = parseInt((end - start) / 1000);
      if (timeRemaining > 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        seconds = timeRemaining % 60;
        daysText.textContent = days;
        hoursText.textContent = hours;
        minutesText.textContent = minutes;
        secondsText.textContent = seconds;
      } else {
        return;
      }
    }
  }
  countDown("Fri Mar 20 2023 18:31:55 GMT+0700 (Indochina Time)");
});
