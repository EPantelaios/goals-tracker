import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './ErrorModal.module.css';

type Props = {
  title: string;
  message: string;
  onConfirm: () => void;
  buttonName?: string;
};

const ErrorModal = (props: Props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>
            {props.buttonName || 'Understand'}
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
