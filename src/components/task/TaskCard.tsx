"use client";

import { useState } from "react"
import { TascCardTitle } from "./TascCardTitle"
import { Tasks } from "./Tasks"
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton"
import { TaskAddInput } from "./input/TaskAddInput"
import { Todo } from "@/components/task/types/index"

export const TaskCard = () => {
  const initilaTasks: Todo[] = [
    {
      id: 139,
      user_id: 9,
      title: "zzz",
      description: "",
      due_date: "",
      completed: false,
      zone: 1,
      category_ids: [],
      created_at: "2023-12-16T11:32:47.349+09:00",
      updated_at: "2023-12-16T11:32:47.349+09:00"
    }
  ]
  const [inputText, setInputText] = useState<string>("")
  const [tasks, setTasks] = useState<Todo[]>(initilaTasks);
  return (
    <div className="w-42 px-2 py-2 m-4 bg-slate-300 rounded-lg">
      <TascCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
}
