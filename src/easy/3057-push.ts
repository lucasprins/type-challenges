export type Result = Push<[1, 2], "3">; // [1, 2, '3']

export type Push<T extends any[], U> = [...T, U];
