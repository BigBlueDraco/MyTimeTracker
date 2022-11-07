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

  id,
  time,

  backgroundColor,
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

  const [time, setTime] = useState(currentTime || 0);

  const [timerInterval, setTimerInterval] = useState();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const classes = classNames(className, {
    [`${s['started']}`]: isActive,
  });

  const getTime = (startTime, id) => {
    if (currentTime) {
      const time = currentTime + Date.now() - startTime;
      setTime(time);
      return;
    } else {
      const time = Date.now() - startTime;
      setTime(time);
    }
    saveTimerData();
  };

  const saveTimerData = () => {
    dispath(updateTrecker({ id, time, isActive, interval: timerInterval }));
  };

  useEffect(() => {
    setHours(Math.floor(Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }, [time]);

  const stopTimer = () => {
    setIsActive(false);
    clearInterval(timerInterval);
    saveTimerData();
  };

  const startTimer = () => {
    const startTime = Date.now();
    const interval = setInterval(() => getTime(startTime, currentTime), 1000);
    setTimerInterval(interval);
    setIsActive(true);
    saveTimerData();
  };

  const toggleTimer = () => {
    if (isActive) {
      stopTimer();
      return;
    }
    startTimer();
  };

  return (
    <>
      <p className={classes}>
        {hours
          ? hours.toString().padStart(2, '0')
          : minutes.toString().padStart(2, '0')}
        <span>:</span>
        {hours
          ? minutes.toString().padStart(2, '0')
          : seconds.toString().padStart(2, '0')}
        {/* {seconds.toString().padStart(2, '0')} */}
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
