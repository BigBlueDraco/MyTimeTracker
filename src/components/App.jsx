import { Button } from './Button/Button';
import { TimerTreckerCard } from './TimerTreckerCard/TimerTreckerCard';
import pause from 'icons/pause.svg';
import { AddTrecker } from './AddTrecker/AddTrecker';
import s from 'components/TimerTreckerCard/TimerTreckerCard.module.scss';
import { Card } from './TreckerCard/TreckerCard';

export const App = () => {
  return (
    <div>
      <Card />
      <AddTrecker className={s['trecker-card']} />
      <TimerTreckerCard title="Title" subTitle="SubTitle" />
    </div>
  );
};
