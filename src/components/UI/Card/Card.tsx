import classes from './Card.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Card = (props: Props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
