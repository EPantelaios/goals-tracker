import { useState } from 'react';

import styles from './Button.module.css';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLElement>) => unknown;
  // eslint-disable-next-line no-unused-vars
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => unknown;
};

const Button = (props: Props) => {
  const [isButtonClick, setIsButtonClick] = useState<boolean>(false);

  const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setIsButtonClick(true);
    props?.onClick && props.onClick(event);
  };

  return (
    <button
      type={props.type || 'button'}
      className={`${styles.button} ${props.className} ${
        isButtonClick ? styles.buttonNotHover : ''
      }`}
      onClick={buttonClickHandler}
      onMouseLeave={() => setIsButtonClick(false)}
    >
      {props.children}
    </button>
  );
};

export default Button;
