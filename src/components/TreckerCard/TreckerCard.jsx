import classNames from 'class-names';
import { Children } from 'react';
import close from '../../icons/x.svg';

const TreckerCard = () => {
  const classes = classNames(s['trecker-card'], className);

  return (
    <div
      className={classes}
      style={{
        backgroundColor,
        width,
        height,
      }}
    >
      <Button
        className={`${s['trecker-card__btn']} ${s['trecker-card__btn--close']}`}
      >
        <img src={close} alt="" />
      </Button>
      <Children />
    </div>
  );
};
