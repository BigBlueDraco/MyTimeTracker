import { Button } from './Button/Button';
import { TimerTreckerCard } from './TimerTreckerCard/TimerTreckerCard';
import pause from 'icons/pause.svg';
import { BlockPicker } from 'react-color';
import { AddTrecker } from './AddTrecker/AddTrecker';
import s from 'components/TimerTreckerCard/TimerTreckerCard.module.scss';

export const App = () => {
  const handleChangeComplete = color => {
    console.log(color.hex);
  };
  return (
    <div>
      <AddTrecker className={s['trecker-card']} />
      <TimerTreckerCard />
      <Button icon={pause}></Button>
    </div>
  );
};
