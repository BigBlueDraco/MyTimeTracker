import { Button } from 'components/Button/Button';
import { CirclePicker } from 'react-color';
import plus from 'icons/plus.svg';
import s from './AddTrecker.module.scss';
import { useState } from 'react';
import { Card } from 'components/Card/Card';
import { useDispatch } from 'react-redux';
import { addTrecker } from 'redux/treckersSlice';
import { Input } from 'components/Input/Input';

const COLORS = [
  '#ffc0cb',
  '#EB9697',

  '#b79bdd',
  '#6666ff',

  '#b6d7a8',
  '	#079962',
];

export const AddTrecker = ({ className, onSubmit }) => {
  const [color, setColor] = useState('#EB9697');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispath = useDispatch();
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
    dispath(addTrecker({ color, title, subTitle }));
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
          <img src={plus} width="45px" alt=""></img>
        </Button>
      )}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          action=""
          className={s['add-trecker-form']}
        >
          <Input
            onChange={handleChange}
            type="text"
            name="title"
            label="Title"
          />
          <Input
            onChange={handleChange}
            type="text"
            name="title"
            label={'subTitle'}
          />
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
