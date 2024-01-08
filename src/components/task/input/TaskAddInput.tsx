"use client";

import { v4 as uuidv4 } from 'uuid';
import { Todo } from "../types";

interface Props {
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  tasks: Todo[]
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TaskAddInput = (props: Props) => {
  const { inputText, setInputText, tasks, setTasks } = props;

  const handaleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputText === "") return;
    setTasks([
      ...tasks,
      {
        id: 22,
        user_id: 11,
        title: inputText,
        description: "",
        due_date: "",
        completed: false,
        zone: 1,
        category_ids: [],
        created_at: "2023-12-16T11:32:47.349+09:00",
        updated_at: "2023-12-16T11:32:47.349+09:00"
      }
    ])
    setInputText("")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handaleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="add a task"
          className="w-auto text-md mt-2 px-0.5 py-1 rounded-md border-none outline-none"
          value={inputText}
          />
      </form>
    </div>
  )
}
