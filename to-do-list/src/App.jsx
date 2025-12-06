import Form from "./components/Form";
import Filters from "./components/Filters";
import TaskContainer from "./components/TaskContainer";

function App() {
  return (
    <>
      <h1>La mia prima To-Do-List</h1>
      <div className="task-app">
        <Form />
        <Filters />
        <TaskContainer />
      </div>
    </>
  );
}

export default App;
