import { useEffect, useState } from 'react';

export const TreckerCard = () => {
  return (
    <div className="TreckerCard">
      <p></p>
      <p></p>
      <TreckerTimer />
    </div>
  );
};

const TreckerTimer = () => {
  const startTime = Date.now();
  console.log(startTime);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = startTime => {
    const time = Date.now() - startTime;
    console.log(time);

    setHours(Math.floor(Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(startTime), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <p>
      {minutes}
      <span>:</span>
      {seconds}
    </p>
  );
};
