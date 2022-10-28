import classNames from 'class-names';
import close from '../../icons/x.svg';
import s from './TreckerCard.module.scss';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const Card = ({
  className = '',
  backgroundColor,
  width,
  height,
  children,
  onClose = () => {},
  isClosebel = true,
}) => {
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
      {isClosebel && (
        <Button
          onClose={onClose}
          className={`${s['trecker-card__btn']} ${s['trecker-card__btn--close']}`}
        >
          <img src={close} alt="" />
        </Button>
      )}

      {children}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  isClosebel: PropTypes.bool,
};

Button.defaultProps = {
  onClose: () => {},
  isClosebel: true,
};
