export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export type TodoPreview = MyPick<Todo, "title" | "completed">;

export const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// opposite of Omit
// type MyPick<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? P : never]: T[P];
// };

//also works!!
export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
