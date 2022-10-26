import { Button } from './Button/Button';
import { TreckerTimerCard } from './TreckerCard/TreckerCard';
import pause from 'icons/pause.svg';
import { BlockPicker } from 'react-color';
import { AddTrecker } from './AddTrecker/AddTrecker';
import s from 'components/TreckerCard/TreckerCard.module.scss';

export const App = () => {
  const handleChangeComplete = color => {
    console.log(color.hex);
  };
  return (
    <div>
      <AddTrecker className={s['trecker-card']} />
      <BlockPicker
        color={'#e15241'}
        colors={[
          '#D9E3F0',
          '#F47373',
          '#697689',
          '#37D67A',
          '#2CCCE4',
          '#555555',
          '#dce775',
          '#ff8a65',
          '#ba68c8',
        ]}
        onChangeComplete={handleChangeComplete}
        triangle="hide"
      />
      <TreckerTimerCard />
      <Button icon={pause}></Button>
    </div>
  );
};
