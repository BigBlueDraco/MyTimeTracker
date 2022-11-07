import s from './Header.module.scss';
export const Header = () => {
  return (
    <header className={s['header']}>
      <div className="container">
        <h1>Tasks trecker</h1>
      </div>
    </header>
  );
};
