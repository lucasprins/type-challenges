export interface Todo {
  title: string
  description: string
  completed: boolean
}

export type TodoPreview = MyOmit<Todo, 'description' | 'title'>

export const todo: TodoPreview = {
  completed: false,
}

export type MyOmit<T, D> = {
  [K in keyof T as K extends D ? never : K]: T[K]
}