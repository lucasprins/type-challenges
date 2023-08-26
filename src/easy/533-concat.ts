export type Result = Concat<[1], [2]> // expected to be [1, 2]

export type Concat<X extends readonly any[], Y extends readonly any[]> = [...X, ...Y] 