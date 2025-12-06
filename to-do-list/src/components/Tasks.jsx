import Task from "./Task";
import tasks from "../data/tasks.js";

export default function Tasks() {
  return (
    <div>
      <ul>
        <Task></Task>
        <Task text="Studia Javascript"></Task>
        <Task text="Studia CSS"></Task>
        <Task text="Studia Html"></Task>
      </ul>
    </div>
  );
}
