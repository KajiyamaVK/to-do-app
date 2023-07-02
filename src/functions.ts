import { ITask } from "./interfaces";
import { useTaskContext } from "./contexts";

export function sortTasks(tasks: ITask[]) {
  const result = tasks.sort((a, b) => {
    if (a.isCompleted === b.isCompleted) {
      return b.id - a.id;
    } else {
      return (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0);
    }
  });
  return result;
}
