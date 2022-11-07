import { AddTrecker } from 'components/AddTrecker/AddTrecker';
import { Section } from 'components/Section.jsx/Sectioon';
import { TimerTreckerCard } from 'components/TimerTreckerCard/TimerTreckerCard';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTreckers } from 'redux/treckersSelectors';
import s from './TreckerList.module.scss';

export const TreckerList = () => {
  // const [treckers, setTimers] = useState([]);
  const treckers = useSelector(getTreckers);
  const dispath = useDispatch();

  const addTrecker = timer => {
    // setTimers([...treckers, timer]);
  };
  const deletTrecker = id => {
    // const res = treckers.filter(elem => elem.id !== id);
    dispath(deletTrecker(id));
    // setTimers([...res]);
  };
  return (
    <Section title="">
      <ul className={s['trecker-list']}>
        {treckers[0] &&
          treckers.map(elem => (
            <li key={elem.id}>
              <TimerTreckerCard
                id={elem.id}
                title={elem.title}
                subTitle={elem.subTitle}
                backgroundColor={elem.color}
                close={deletTrecker}
                time={elem.time}
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
