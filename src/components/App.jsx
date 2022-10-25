import { Button } from './Button/Button';
import { TreckerCard } from './TreckerCard/TreckerCard';
import pause from 'icons/pause.svg';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <TreckerCard subTitle={'testSubTitle'} title={'TestTitle'} />
      <Button icon={pause}></Button>
    </div>
  );
};
