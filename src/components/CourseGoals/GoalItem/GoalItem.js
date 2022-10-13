import React from 'react';

import { RiDeleteBinLine } from 'react-icons/ri';

import './GoalItem.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <>
      <li className="goal-item">
        {props.children}
        <span className="right-delete-icon" onClick={deleteHandler}>
          <RiDeleteBinLine size={20} />
        </span>
      </li>
    </>
  );
};

export default CourseGoalItem;
