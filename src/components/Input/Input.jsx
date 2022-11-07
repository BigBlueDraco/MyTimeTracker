import s from './input.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Input = ({ label, onChange, name, type, className, ...attrs }) => {
  const inputClasses = classNames(s['input'], className);
  return (
    <label className={inputClasses}>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className={s['input__field']}
        placeholder=" "
        {...attrs}
      />
      <span className={s['input__label']}>{label || ''}</span>
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
