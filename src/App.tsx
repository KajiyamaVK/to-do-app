import Header from "./components/Header";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

function App() {
  return (
    <>
      <Header />
      <NewTaskForm />
      <TaskList />
    </>
  );
}

export default App;
