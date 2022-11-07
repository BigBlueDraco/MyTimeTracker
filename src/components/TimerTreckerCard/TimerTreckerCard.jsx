import { useState } from 'react';

import classNames from 'class-names';
import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';

import s from 'components/TimerTreckerCard/TimerTreckerCard.module.scss';

import pause from '../../icons/pause.svg';
import play from '../../icons/play.svg';
import { Card } from 'components/Card/Card';
import { useDispatch } from 'react-redux';
import { removeTrecker, updateTrecker } from 'redux/treckersSlice';
import { useEffect } from 'react';

export const TimerTreckerCard = ({
  subTitle = 'Timer default subTitle',
  title = 'timer default Title',

  close,
  id,
  time,

  className,
  backgroundColor,
  width,
  height,
}) => {
  // const classes = classNames(s['trecker-card'], className);
  const dispath = useDispatch();
  const onClose = e => {
    dispath(removeTrecker(id));
  };
  return (
    <Card onClose={onClose} backgroundColor={backgroundColor}>
      <TreckerTittle subTitle={subTitle} title={title} />
      <TreckerTimer
        className={s['trecker-card__timer']}
        id={id}
        currentTime={time}
      />
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

const TreckerTimer = ({ className, currentTime, id }) => {
  const dispath = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [deltaTime, setDeltaTime] = useState(currentTime);
  const [timerInterval, setTimerInterval] = useState();
  const [, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const classes = classNames(className, {
    [`${s['started']}`]: isActive,
  });

  const getTime = (startTime, id) => {
    if (currentTime) {
      const time = currentTime + Date.now() - startTime;
      setHours(Math.floor(Math.floor((time / (1000 * 60 * 60)) % 24)));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
      setDeltaTime(time);
      return;
    } else {
      const time = Date.now() - startTime;
      setHours(Math.floor(Math.floor((time / (1000 * 60 * 60)) % 24)));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
      setDeltaTime(time);
    }
  };
  const saveTimerData = () => {
    dispath(updateTrecker({ id, time: deltaTime }));
  };

  useEffect(() => {
    saveTimerData();
  }, [deltaTime]);

  const toggleTimer = () => {
    if (isActive) {
      setIsActive(false);
      clearInterval(timerInterval);
      saveTimerData();
      return;
    }
    const startTime = Date.now();
    const interval = setInterval(() => getTime(startTime, currentTime), 1000);
    setIsActive(true);
    setTimerInterval(interval);
  };

  return (
    <>
      <p className={classes}>
        {minutes.toString().padStart(2, '0')}
        <span>:</span>
        {seconds.toString().padStart(2, '0')}
      </p>
      <TreckerTimerControls
        className={s['trecker-card__controls']}
        toggleTimer={toggleTimer}
        isActive={isActive}
      />
    </>
  );
};

const TreckerTimerControls = ({ className, toggleTimer, isActive }) => {
  const classes = classNames(className);
  return (
    <div className={classes}>
      <Button className={s['trecker-card__btn']} onClick={toggleTimer}>
        {isActive ? <img src={pause} alt="" /> : <img src={play} alt="" />}
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
