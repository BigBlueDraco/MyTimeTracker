import { useEffect, useState } from 'react';
import s from 'components/TreckerCard/TreckerCard.module.scss';

export const TreckerCard = ({ subTitle, title }) => {
  return (
    <div className={s['trecker-card']} style={{ width: '300px' }}>
      <TreckerTittle subTitle={subTitle} title={title} />
      <TreckerTimer />
    </div>
  );
};

const TreckerTittle = ({ subTitle, title }) => {
  return (
    <div>
      <p>{subTitle}</p>
      <p>{title}</p>
    </div>
  );
};

const TreckerTimer = () => {
  const startTime = Date.now();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = startTime => {
    const time = Date.now() - startTime;
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
