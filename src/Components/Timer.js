import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(8 * 60 * 60); // 8 hours in seconds
  const [timerOn, setTimerOn] = useState(true);

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleStartTimer = () => {
    setTimerOn(true);
  };

  const handleStopTimer = () => {
    setTimerOn(false);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p>{formatTime(time)}</p>
      {/* <button onClick={handleStartTimer}>Start Timer</button>
      <button onClick={handleStopTimer}>Stop Timer</button> */}
    </div>
  );
};

export default Timer;
