import { useEffect, useState } from 'react';
import classNames from 'class-names';
import s from 'components/TreckerCard/TreckerCard.module.scss';
import { Button } from 'components/Button/Button';
import pause from '../../icons/pause.svg';
import close from '../../icons/x.svg';
import play from '../../icons/play.svg';

export const TreckerCard = ({ subTitle, title }) => {
  return (
    <div className={s['trecker-card']} style={{ width: '300px' }}>
      <div>
        <TreckerTittle subTitle={subTitle} title={title} />
        <Button
          className={`${s['trecker-card__btn']} ${s['trecker-card__btn--close']}`}
        >
          <img src={close} alt="" />
        </Button>
      </div>

      <TreckerTimer className={s['trecker-card__timer']} />
      <TreckerTimerControls className={s['trecker-card__controls']} />
    </div>
  );
};

const TreckerTittle = ({ subTitle, title }) => {
  return (
    <div className={s['trecker-card__title-wraper']}>
      <p className={s['trecker-card__sub-title']}>{subTitle}</p>
      <p className={s['trecker-card__title']}>{title}</p>
    </div>
  );
};

const TreckerTimer = ({ className, started }) => {
  const classes = classNames(className, {
    [`${s['started']}`]: started || true,
  });
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
    <p className={classes}>
      {minutes}
      <span>:</span>
      {seconds}
    </p>
  );
};

const TreckerTimerControls = ({ className }) => {
  const classes = classNames(className);
  return (
    <div className={classes}>
      <Button className={s['trecker-card__btn']}>
        <img src={play} alt="" />
      </Button>
      <Button className={s['trecker-card__btn']}>
        <img src={pause} alt="" />
      </Button>
    </div>
  );
};
