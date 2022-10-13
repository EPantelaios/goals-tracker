import React, { useState } from 'react';

import CourseInput from './components/CourseGoals/GoalInput/GoalInput';
import CourseGoalList from './components/CourseGoals/GoalList/GoalList';

import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises', id: uuidv4() },
    { text: 'Finish the assignment', id: uuidv4() },
    { text: 'Refactoring code for this repo', id: uuidv4() },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: uuidv4() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <>
      <section id="goal-form">
        <CourseInput onAddItem={addGoalHandler} />
      </section>
      <section id="goals-list">
        {courseGoals.length > 0 ? (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) : (
          <p style={{ textAlign: 'center', fontWeight: '500' }}>
            No goals found. Maybe add one?
          </p>
        )}
      </section>
    </>
  );
};

export default App;
