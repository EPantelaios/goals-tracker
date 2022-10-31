import Button from '../../UI/Button/Button';

type Props = {
  type: 'button' | 'submit' | 'reset';
  className: string;
  onResetItems: () => void;
};

const CourseInput = (props: Props) => {
  const resetItemsHandler = () => {
    localStorage.clear();
    props.onResetItems();
  };

  return (
    <Button
      className={props.className}
      type={props.type}
      onClick={resetItemsHandler}
    >
      Reset All
    </Button>
  );
};

export default CourseInput;
