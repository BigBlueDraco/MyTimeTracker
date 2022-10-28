import { Button } from 'components/Button/Button';
import { CirclePicker } from 'react-color';
import classNames from 'class-names';
import plus from 'icons/plus.svg';
import s from './AddTrecker.module.scss';
import { useState } from 'react';
import { Card } from 'components/Card/Card';
import { nanoid } from 'nanoid';

const COLORS = [
  '#ffc0eb',
  '#ffc0cb',
  '#EB9697',

  '#b79bdd',
  '#67a2d8',
  '#6666ff',

  '#b6d7a8',
  '	#079962',
  '#055a39',

  '#dce173',
  '#f4ff4b',
  '#ffbf00',
];

export const AddTrecker = ({ className, onSubmit }) => {
  const [color, setColor] = useState('#EB9697');
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
    setColor('#EB9697');
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
          className={s['add-trecker-form']}
        >
          <label htmlFor="">
            <p>Title</p>
            <input
              type="text"
              name="title"
              className={s['add-trecker-form__input']}
              onInput={e => handleChange(e)}
              value={title}
            />
          </label>
          <label htmlFor="">
            <p>Sub Title</p>
            <input
              type="text"
              name="subTitle"
              className={s['add-trecker-form__input']}
              onInput={e => handleChange(e)}
              value={subTitle}
            />
          </label>
          <label htmlFor="">
            Choose color
            <CirclePicker onChange={handleColorChange} colors={COLORS} />
          </label>
          <Button
            className={s['add-trecker-form__btn']}
            type="submit"
            style={{ backgroundColor: color }}
          >
            Add Trecker
          </Button>
        </form>
      )}
    </Card>
  );
};
