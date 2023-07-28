import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import styles from "./NewTaskForm.module.css";
import { useTaskContext } from "../contexts";
import { ITask } from "../interfaces";
import { sortTasks } from "../functions";

export default function NewTaskForm() {
  const [newTask, setNewTask] = useState<string>("");
  const { taskData, setTaskData } = useTaskContext();

  function clearInput() {
    setNewTask("");
  }

  function addTask() {
    const newId: number =
      taskData.reduce((prev, current) => {
        return prev.id > current.id ? prev : current;
      }).id + 1;
    const newTaskObject: ITask = {
      id: newId,
      content: newTask,
      isCompleted: false,
    };
    setTaskData(sortTasks([...taskData, newTaskObject]));
    clearInput();
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") addTask();
    if (e.key === "Escape") clearInput();
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          handleKeyPress(e);
        }}
      />
      <button disabled={!newTask} onClick={addTask}>
        Criar
        <BsExclamationCircle />
      </button>
    </div>
  );
}
