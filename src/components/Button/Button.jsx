import classNames from 'class-names';
import pause from 'icons/pause.svg';
import PropTypes from 'prop-types';

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const classes = classNames('btn', className, { active });
  return (
    <button className={classes} disable={disabled} onClick={onClick} {...attrs}>
      children
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

Button.defaultProps = {
  children: 'Default Button',
  onClick: () => {},
  classNames: '',
  disabled: false,
  active: false,
};
