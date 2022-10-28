import classNames from 'class-names';
import pause from 'icons/pause.svg';
import PropTypes from 'prop-types';
import s from './button.module.scss';

export const Button = ({
  children = 'Default Button',
  onClick = () => {},
  className = '',
  disabled = false,
  active = false,
  ...attrs
}) => {
  const classes = classNames(s['btn'], className, { active });
  return (
    <button
      className={classes}
      disable={disabled.toString()}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  classNames: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};
