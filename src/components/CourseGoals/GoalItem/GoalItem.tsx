import { RiDeleteBinLine } from 'react-icons/ri';

import './GoalItem.css';

type Props = {
  id: string;
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: string) => void;
  children: React.ReactNode;
};

const CourseGoalItem = (props: Props) => {
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
