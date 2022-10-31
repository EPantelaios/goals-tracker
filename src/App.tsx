import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import CourseInput from './components/CourseGoals/GoalInput/GoalInput';
import GoalList from './components/CourseGoals/GoalList/GoalList';
import './App.css';

const App = () => {
  const itemsArray = [
    { text: 'Do all exercises', id: uuidv4() },
    { text: 'Finish the assignment', id: uuidv4() },
    { text: 'Refactoring code for this repo', id: uuidv4() },
  ];

  const setAndRetriveLocalStorage = (
    itemsArray: { text: string; id: string }[]
  ) => {
    const items = localStorage.getItem('items');
    if (items == null) {
      localStorage.setItem('items', JSON.stringify(itemsArray));
    }
    return JSON.parse(localStorage.getItem('items'));
  };

  const [courseGoals, setCourseGoals] = useState(() =>
    setAndRetriveLocalStorage(itemsArray)
  );

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: uuidv4() });
      //update local storage with new item
      localStorage.setItem('items', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId: string) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      //update the local storage by removing the deleted item
      localStorage.setItem('items', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  const resetItemsHandler = () => {
    localStorage.setItem('items', JSON.stringify([]));
    setCourseGoals([]);
  };

  return (
    <>
      <section id="goal-form">
        <CourseInput
          onAddItem={addGoalHandler}
          onResetItems={resetItemsHandler}
        />
      </section>
      <section id="goals-list">
        {courseGoals?.length > 0 ? (
          <GoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
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
