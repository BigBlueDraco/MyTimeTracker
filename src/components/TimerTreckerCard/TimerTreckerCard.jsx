import { useEffect, useState } from 'react';

import classNames from 'class-names';
import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';

import s from 'components/TimerTreckerCard/TimerTreckerCard.module.scss';

import pause from '../../icons/pause.svg';
import close from '../../icons/x.svg';
import play from '../../icons/play.svg';
import { Card } from 'components/Card/Card';

export const TimerTreckerCard = ({
  subTitle,
  title,

  close,
  id,

  className,
  backgroundColor,
  width,
  height,
}) => {
  const classes = classNames(s['trecker-card'], className);

  const onClose = e => {
    close(id);
  };
  return (
    <Card onClose={onClose} backgroundColor={backgroundColor}>
      <TreckerTittle subTitle={subTitle} title={title} />
      <TreckerTimer className={s['trecker-card__timer']} />
    </Card>
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

const TreckerTimer = ({ className }) => {
  const classes = classNames(className, {
    [`${s['started']}`]: true,
  });
  const [saveTime, setSaveTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (startTime, saveTime) => {
    if (saveTime) {
      const time = saveTime + Date.now() - startTime;
      setHours(Math.floor(Math.floor((time / (1000 * 60 * 60)) % 24)));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
      setSaveTime(time);
      return;
    } else {
      const time = Date.now() - startTime;
      setHours(Math.floor(Math.floor((time / (1000 * 60 * 60)) % 24)));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
      setSaveTime(time);
    }
  };

  const startTimer = () => {
    const startTime = Date.now();
    const interval = setInterval(() => getTime(startTime, saveTime), 1000);
    setTimerInterval(interval);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  return (
    <>
      <p className={classes}>
        {minutes}
        <span>:</span>
        {seconds}
      </p>
      <TreckerTimerControls
        className={s['trecker-card__controls']}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
    </>
  );
};

const TreckerTimerControls = ({ className, startTimer, stopTimer }) => {
  const classes = classNames(className);
  return (
    <div className={classes}>
      <Button className={s['trecker-card__btn']} onClick={startTimer}>
        <img src={play} alt="" />
      </Button>
      <Button className={s['trecker-card__btn']} onClick={stopTimer}>
        <img src={pause} alt="" />
      </Button>
    </div>
  );
};

TimerTreckerCard.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

TimerTreckerCard.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
};
TimerTreckerCard.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
};
