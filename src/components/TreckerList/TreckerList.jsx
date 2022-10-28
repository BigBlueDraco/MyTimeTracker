import { AddTrecker } from 'components/AddTrecker/AddTrecker';
import { TimerTreckerCard } from 'components/TimerTreckerCard/TimerTreckerCard';
import { useState } from 'react';

export const TreckerList = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = timer => {
    console.log(timer);
    setTimers([...timers, timer]);
  };
  const deletTimer = id => {
    console.log(id);
    const res = timers.filter(elem => elem.id !== id);
    setTimers([...res]);
  };
  return (
    <ul>
      {console.log(timers)}
      {timers[0] &&
        timers.map(elem => (
          <li key={elem.id}>
            <TimerTreckerCard
              id={elem.id}
              title={elem.title}
              subTitle={elem.subTitle}
              backgroundColor={elem.color}
              close={deletTimer}
            />
          </li>
        ))}
      <li>
        <AddTrecker onSubmit={addTimer} />
      </li>
    </ul>
  );
};
