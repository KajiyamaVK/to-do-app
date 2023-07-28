import { ITask } from "../interfaces";
import Trash from "./Trash";
import TaskCheckbox from "./TaskCheckbox";
import styles from "./TaskContainer.module.css";

export default function TaskContainer({ task }: { task: ITask }) {
  return (
    <div className={styles.container}>
      <TaskCheckbox task={task} />
      <p
        className={`${styles.content} ${
          task.isCompleted && styles.isCompleted
        }`}
      >
        {task.content}
      </p>
      <Trash taskId={task.id} />
    </div>
  );
}
