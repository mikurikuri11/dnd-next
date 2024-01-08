export type Todo = {
  id: number
  user_id: number
  title: string
  description: string
  due_date: string
  completed: boolean
  zone: number
  category_ids: number[]
  created_at: string
  updated_at: string
}