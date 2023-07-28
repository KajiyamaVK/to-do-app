// Importing necessary dependencies from React
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  FC,
  ReactNode,
} from "react";

import { sortTasks } from "./functions";

// Importing mock data and interface for tasks
import { tasks } from "./mockData";
import { ITask } from "./interfaces";

// Defining the interface for the task context
interface ITaskContext {
  taskData: ITask[]; // An array of tasks
  setTaskData: Dispatch<SetStateAction<ITask[]>>; // A function to update the task data
}

// Creating a new context with the initial values
const TaskContext = createContext<ITaskContext>({
  taskData: [], // An empty array of tasks
  setTaskData: () => {
    []; // A function that returns an empty array of tasks
  },
});

// Creating a provider component that wraps the children components
export const TaskContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Using the useState hook to set the initial state of the task data
  const [taskData, setTaskData] = useState<ITask[]>(sortTasks(tasks));

  // Returning the provider component with the task data and setTaskData function as values
  return (
    <TaskContext.Provider value={{ taskData, setTaskData }}>
      {children}
    </TaskContext.Provider>
  );
};

// Creating a custom hook to access the task context
export function useTaskContext() {
  const context = useContext(TaskContext);
  const { taskData, setTaskData } = context;

  // Returning the task data and setTaskData function
  return { taskData, setTaskData };
}
