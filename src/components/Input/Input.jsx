import { type } from '@testing-library/user-event/dist/type';
import s from './input.module.scss';

export const Input = ({ label, onChange, name, type, ...attrs }) => {
  return (
    <label className={s['input']}>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className={s['input__field']}
        placeholder=" "
        // {...attrs}
      />
      <span className={s['input__label']}>{label || 'default label'}</span>
    </label>
  );
};
