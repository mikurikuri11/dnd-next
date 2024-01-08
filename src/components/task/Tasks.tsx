import { Task } from "./Task";
import { Todo } from "./types";

interface Props {
  tasks: Todo[]
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const Tasks = (props: Props) => {
  const { tasks, setTasks } = props;
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <Task task={task} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  )
}
