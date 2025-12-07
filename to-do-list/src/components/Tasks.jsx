import Task from "./Task";
import tasks from "../data/tasks";

const taskList = tasks.map((task) => <Task task={task} />);

export default function Tasks() {
  return (
    <div>
      <ul>{taskList}</ul>
    </div>
  );
}
