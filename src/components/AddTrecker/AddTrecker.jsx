import { Button } from 'components/Button/Button';
import { CirclePicker } from 'react-color';
import classNames from 'class-names';
import plus from 'icons/plus.svg';
import s from './AddTrecker.module.scss';
import { useState } from 'react';
import { Card } from 'components/Card/Card';
import { nanoid } from 'nanoid';

export const AddTrecker = ({ className, onSubmit }) => {
  const [color, setColor] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleColorChange = (color, event) => {
    setColor(color.hex);
  };

  const handleChange = e => {
    const {
      target: { value, name },
    } = e;
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
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ id: nanoid(), color, title, subTitle });
    toggleForm();
    setColor('');
    setTitle('');
    setSubTitle('');
  };

  return (
    <Card
      className={s['add-trecker']}
      onClose={toggleForm}
      isClosebel={isFormOpen}
    >
      {!isFormOpen && (
        <Button className={s['add-trecker__btn']} onClick={toggleForm}>
          <img src={plus} width="45px"></img>
        </Button>
      )}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          action=""
          className={s['add-trecker__form']}
        >
          <label htmlFor="">
            <p>Title</p>
            <input
              type="text"
              name="title"
              className={s['add-trecker__input']}
              onInput={e => handleChange(e)}
              value={title}
            />
          </label>
          <label htmlFor="">
            <p>Sub Title</p>
            <input
              type="text"
              name="subTitle"
              className={s['add-trecker__input']}
              onInput={e => handleChange(e)}
              value={subTitle}
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
          <Button type="submit" style={{ backgroundColor: color }} />
        </form>
      )}
    </Card>
  );
};
