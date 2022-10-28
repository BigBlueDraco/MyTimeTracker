import { Button } from 'components/Button/Button';
import { CirclePicker } from 'react-color';
import classNames from 'class-names';
import plus from 'icons/plus.svg';
import s from './AddTrecker.module.scss';
import { useState } from 'react';
import { Card } from 'components/TreckerCard/TreckerCard';

export const AddTrecker = ({ className, onSubmit }) => {
  const [color, setColor] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const handleColorChange = (color, event) => {
    setColor(color);
    console.log(color.hex);
  };

  const handleChange = ({ taget: { value, name } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'subTitle':
        setSubTitle(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('sub');
    onSubmit({ color, title, subTitle });
    setColor('');
    setTitle('');
    setSubTitle('');
  };

  return (
    <Card className={s['add-trecker']}>
      {/* <Button className={s['add-trecker__btn']}>
        <img src={plus} width="45px"></img>
      </Button> */}

      <form
        onSubmit={handleSubmit}
        action=""
        className={s['add-trecker__form']}
      >
        <label htmlFor="">
          <p>Title</p>
          <input type="text" name="title" className={s['add-trecker__input']} />
        </label>
        <label htmlFor="">
          <p>Sub Title</p>
          <input
            type="text"
            name="subTitle"
            className={s['add-trecker__input']}
          />
        </label>
        <label htmlFor="">
          Choose color
          <CirclePicker
            onChange={handleColorChange}
            colors={[
              '#B80000',
              '#DB3E00',
              '#FCCB00',
              '#008B02',
              '#006B76',
              '#1273DE',
              '#004DCF',
              '#5300EB',
              '#EB9694',
              '#EB9695',
              '#EB9696',
              '#EB9697',
            ]}
          />
        </label>
        <Button type="submit" />
      </form>
    </Card>
  );
};
