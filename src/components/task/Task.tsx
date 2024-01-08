import { FaTrash } from "react-icons/fa";
import { Todo } from "./types";

interface TaskProps {
  task: Todo;
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const Task = (props: TaskProps) => {
  const { task, tasks, setTasks } = props;
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="w-30 flex py-3 mt-3 shadow-xl bg-white rounded-md justify-between">
      <p className="ml-2">{task.title}</p>
      <button
        className="mr-2 cursor-pointer"
        onClick={() => handleDelete(task.id)}
        >
        <FaTrash />
      </button>
    </div>
  );
};
