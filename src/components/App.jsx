import { Button } from './Button/Button';
import { TimerTreckerCard } from './TimerTreckerCard/TimerTreckerCard';
import pause from 'icons/pause.svg';
import { AddTrecker } from './AddTrecker/AddTrecker';
import s from 'components/TimerTreckerCard/TimerTreckerCard.module.scss';
import { Card } from './Card/Card';
import { TreckerList } from './TreckerList/TreckerList';

export const App = () => {
  return (
    <div>
      <TreckerList />
    </div>
  );
};
