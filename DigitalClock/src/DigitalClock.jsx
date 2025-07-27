import React, { useEffect, useState } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    

    const weekday = weekdays[time.getDay()];
    const day = padZero(time.getDate());
    const month = months[time.getMonth()];
    const year = time.getFullYear();

    const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    const dateString = `${weekday}, ${day} ${month} ${year}`;

    return { timeString, dateString };
  }

  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }

  const { timeString, dateString } = formatTime();

  return (
    <div className="clock-container">
      <div className="clock">
        <div>{timeString}</div>
      </div>
      <div>
        
        <div className="date-day">{dateString}</div>
      </div>
    </div>
  );
}

export default DigitalClock;
