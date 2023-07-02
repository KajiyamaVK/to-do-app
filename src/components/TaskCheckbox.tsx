import styles from "./TaskCheckbox.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { useTaskContext } from "../contexts";
import { ITask } from "../interfaces";
import { sortTasks } from "../functions";

interface ITaskCheckBox {
  task: ITask;
}

export default function TaskCheckbox({ task }: ITaskCheckBox) {
  const { taskData, setTaskData } = useTaskContext();

  function handleClick() {
    task.isCompleted = !task.isCompleted;
    const unModifiedTasks = taskData.filter((item) => item.id !== task.id);
    const newResults = sortTasks([...unModifiedTasks, task]);
    setTaskData(newResults);
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.checkbox} ${task.isCompleted && styles.completed}`}
    >
      {task.isCompleted && <AiOutlineCheck />}
    </div>
  );
}
