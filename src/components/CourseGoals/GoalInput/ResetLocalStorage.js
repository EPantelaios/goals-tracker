import Button from '../../UI/Button/Button';

const CourseInput = (props) => {
  const resetItemsHandler = () => {
    localStorage.clear();
    props.onResetItems();
  };

  return (
    <Button
      className={props.className}
      type={props.type}
      onClick={resetItemsHandler}
      props={props}
    >
      Reset All
    </Button>
  );
};

export default CourseInput;
