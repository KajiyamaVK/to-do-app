import styles from "./Trash.module.css";
import { BsTrash } from "react-icons/bs";
import { useTaskContext } from "../contexts";

export default function Trash({ taskId }: { taskId: number }) {
  const { taskData, setTaskData } = useTaskContext();

  function deleteTask(id: number) {
    setTaskData(
      taskData.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <button onClick={() => deleteTask(taskId)}>
      <BsTrash className={styles.trash} />
    </button>
  );
}
