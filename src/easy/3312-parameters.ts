export const foo = (arg1: string, arg2: number): void => {};

export type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

type MyParameters<T> = T extends (...args: infer A) => any ? A : never;
