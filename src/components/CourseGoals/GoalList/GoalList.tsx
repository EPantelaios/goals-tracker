import CourseGoalItem from '../GoalItem/GoalItem';
import './GoalList.css';

type Props = {
  items: { id: string; text: string }[];
  // eslint-disable-next-line no-unused-vars
  onDeleteItem: (id: string) => void;
};

const CourseGoalList = (props: Props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
