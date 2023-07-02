import { useEffect, useState, ReactNode } from "react";
import TaskContainer from "./TaskContainer";
import { useTaskContext } from "../contexts";
import styles from "./TaskList.module.css";

export default function TaskList() {
  const { taskData } = useTaskContext();

  const concludedTasks = taskData.filter((item) => {
    return item.isCompleted === true;
  });

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.headerPart1}>
          <p className={styles.text1}>Tarefas criadas</p>
          <div className={styles.circle}>{taskData.length}</div>
        </div>
        <div className={styles.headerPart2}>
          <p className={styles.text2}>Concluídas</p>
          <div className={styles.circle}>{concludedTasks.length}</div>
        </div>
      </header>
      <div className={styles.taskList}>
        {taskData.map((item) => (
          <TaskContainer task={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
