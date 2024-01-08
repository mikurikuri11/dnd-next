import Image from 'next/image'
import { TaskCards } from '@/components/task/TaskCards'

export default function Home() {
  return (
    <div className="grid gap-4 sm:grid sm:grid-cols-2 w-full">
      <TaskCards />
    </div>
  )
}
