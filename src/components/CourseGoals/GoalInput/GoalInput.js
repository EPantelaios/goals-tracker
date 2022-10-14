import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import ResetLocalStorage from './ResetLocalStorage';
import ErrorModal from '../../UI/Modal/ErrorModal';
import styles from './GoalInput.module.css';
import styledButtons from './ResetLocalStorage.module.css';

const CourseInput = (props) => {
  const maxCharacters = 200;
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [maxLengthInputText, setMaxLengthInputText] = useState(maxCharacters);
  const [error, setError] = useState();

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
            maxLength="200"
            value={enteredValue}
            onChange={inputChangeHandler}
            onFocus={() => setIsValid(true)}
          />
          <div
            className={`${styles['max-length-text']}`}
            title="The allowed limit is up to 200 characters"
          >
            {maxLengthInputText}
          </div>
        </div>
        <div className={styledButtons.formButtons}>
          <Button
            type="submit"
            props={props}
            className={styledButtons.addButton}
          >
            Add Goal
          </Button>
          <ResetLocalStorage
            type="button"
            props={props}
            onResetItems={resetItemsHandler}
            className={styledButtons.resetButton}
          />
        </div>
      </form>
    </>
  );
};

export default CourseInput;
