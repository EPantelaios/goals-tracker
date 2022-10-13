import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './GoalInput.module.css';

const CourseInput = (props) => {
  const maxCharacters = 200;
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [maxLengthInputText, setMaxLengthInputText] = useState(maxCharacters);

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
      setIsValid(false);
      return;
    }

    props.onAddItem(enteredValue);
    setEnteredValue('');
    setMaxLengthInputText(maxCharacters);
  };

  const errorFormMessage = 'Invalid input';

  return (
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
        <Button type="submit" props={props}>
          Add Goal
        </Button>
      </div>
    </form>
  );
};

export default CourseInput;