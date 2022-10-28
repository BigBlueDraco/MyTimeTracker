import { AddTrecker } from 'components/AddTrecker/AddTrecker';
import { Section } from 'components/Section.jsx/Sectioon';
import { TimerTreckerCard } from 'components/TimerTreckerCard/TimerTreckerCard';
import { useState } from 'react';
import s from './TreckerList.module.scss';

export const TreckerList = () => {
  const [timers, setTimers] = useState([]);

  const addTrecker = timer => {
    setTimers([...timers, timer]);
  };
  const deletTrecker = id => {
    const res = timers.filter(elem => elem.id !== id);
    setTimers([...res]);
  };
  return (
    <Section title="">
      <ul className={s['trecker-list']}>
        {timers[0] &&
          timers.map(elem => (
            <li key={elem.id}>
              <TimerTreckerCard
                id={elem.id}
                title={elem.title}
                subTitle={elem.subTitle}
                backgroundColor={elem.color}
                close={deletTrecker}
              />
            </li>
          ))}
        <li>
          <AddTrecker onSubmit={addTrecker} />
        </li>
      </ul>
    </Section>
  );
};
