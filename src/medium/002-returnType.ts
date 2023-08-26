export const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

export type a = MyReturnType<typeof fn> // should be "1 | 2"

export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never; 