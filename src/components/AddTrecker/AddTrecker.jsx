import { Button } from 'components/Button/Button';
import plus from 'icons/plus.svg';

export const AddTrecker = ({ className }) => {
  return (
    <div>
      <Button className={className}>
        <img src={plus} width="45px"></img>
      </Button>
    </div>
  );
};
