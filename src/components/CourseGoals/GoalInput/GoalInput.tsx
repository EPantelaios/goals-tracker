import { useState } from 'react';

import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/Modal/ErrorModal';
import styles from './GoalInput.module.css';
import ResetLocalStorage from './ResetLocalStorage';
import styledButtons from './ResetLocalStorage.module.css';

type Props = {
  // eslint-disable-next-line no-unused-vars
  onAddItem: (value: string) => void;
  onResetItems: () => void;
};

const CourseInput = (props: Props) => {
  const maxCharacters = 200;
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [maxLengthInputText, setMaxLengthInputText] =
    useState<number>(maxCharacters);
  const [error, setError] = useState<{ title: string; message: string }>();

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    setMaxLengthInputText(maxCharacters - event.target.value.length);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredValue.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Non-empty values are allowed',
      });
      setIsValid(false);
      return;
    }
    props.onAddItem(enteredValue);
    setEnteredValue('');
    setMaxLengthInputText(maxCharacters);
  };

  const resetItemsHandler = () => {
    setEnteredValue('');
    props.onResetItems();
  };

  const errorFormMessage = 'Invalid input';

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} {...error} />}
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles['form-control']} ${!isValid && styles.invalid}`}
        >
          <label className={styles.label}>Set Your Goals</label>
          <div style={{ visibility: !isValid ? 'visible' : 'hidden' }}>
            <p>{errorFormMessage}</p>
          </div>
          <input
            type="text"
            placeholder="Enter your next goal..."
            maxLength={200}
            value={enteredValue}
            onChange={inputChangeHandler}
            onFocus={() => setIsValid(true)}
          />
          <div
            className={styles['max-length-text']}
            title="The allowed limit is up to 200 characters"
          >
            {maxLengthInputText}
          </div>
        </div>
        <div className={styledButtons.formButtons}>
          <Button type="submit" className={styledButtons.addButton}>
            Add Goal
          </Button>
          <ResetLocalStorage
            type="button"
            onResetItems={resetItemsHandler}
            className={styledButtons.resetButton}
          />
        </div>
      </form>
    </>
  );
};

export default CourseInput;
